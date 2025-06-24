from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Data
from .serializer import DataSerial

def rotate_bytes(key: bytes, shift: int) -> bytes:
    shift = shift % len(key)
    return key[shift:] + key[:shift]
def des_encrypt(key: bytes, plaintext: bytes) -> bytes:
    # Step 1: XOR each byte with corresponding byte in the key
    xored = bytes([b ^ key[i % len(key)] for i, b in enumerate(plaintext)])
    # Step 2: Rotate left by 1 byte
    rotated = xored[1:] + xored[:1]
    return rotated

def des_decrypt(key: bytes, ciphertext: bytes) -> bytes:
    # Step 1: Rotate right by 1 byte
    rotated = ciphertext[-1:] + ciphertext[:-1]
    # Step 2: Reverse XOR
    decrypted = bytes([b ^ key[i % len(key)] for i, b in enumerate(rotated)])
    return decrypted
def des(base_key, message):
    if isinstance(base_key, str):
        base_key = base_key.encode()
    K1 = base_key
    K2 = rotate_bytes(base_key, 2)
    K3 = rotate_bytes(base_key, 4)
    step1 = des_encrypt(K1, message)
    step2 = des_decrypt(K2, step1)
    ciphertext = des_encrypt(K3, step2)
    return ciphertext

def des_reverse(base_key, ciphertext):
    if isinstance(base_key, str):
        base_key = base_key.encode()
    K1 = base_key
    K2 = rotate_bytes(base_key, 2)
    K3 = rotate_bytes(base_key, 4)
    step1 = des_decrypt(K3, ciphertext)
    step2 = des_encrypt(K2, step1)
    plaintext = des_decrypt(K1, step2)
    return plaintext


@api_view(['GET', 'POST'])
def index(request):
    if request.method == "POST":
            # Encrypt message before saving
        data = request.data.copy()
        try:
            encrypted = des(data['secKey'], data['eMessage'].encode())
            data['eMessage'] = encrypted.hex()
        except Exception as e:
            return Response({'data': f'Encryption failed: {str(e)}', 'error': "0"}, status=400)
        serializer = DataSerial(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': 'Saved', 'error': "1"})
        else:
            return Response({'data': 'Already Existed', 'error': "0"}, status=400)

    elif request.method == "GET":
        idGot = request.query_params.get('id')
        key = request.query_params.get('secKey')
        ret=''
        err='Data received successfully'

        # Safely extract the data
        users=Data.objects.filter(id=idGot,secKey=key).first()
        if users:
            try:
                # Convert hex to bytes and decrypt
                ciphertext = bytes.fromhex(users.eMessage)
                decrypted = des_reverse(key, ciphertext)
                ret = decrypted.decode()  # Convert bytes to string
            except Exception as e:
                ret = f"Decryption failed: {str(e)}"
                err = 1
        else:
            ret="Not Found"
            err=1
        response_data = {
            'data': ret,
            'error': err,
        }
        return Response(response_data)
