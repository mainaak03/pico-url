const BASE62_ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const BASE62_LENGTH = BigInt(BASE62_ALPHABET.length);

export const encodeBase62 = (num: bigint) => {
    if (num < 0) throw new Error('Number must be a non-negative BigInt.');
    let encoded = '';
    do {
        const remainder = num % BASE62_LENGTH;
        encoded = BASE62_ALPHABET[Number(remainder)] + encoded;
        num = num / BASE62_LENGTH;  // Use BigInt division
    } while (num > 0);
    return encoded;
};

export const decodeBase62 = (encoded: string) => {
    let num: bigint = BigInt(0);
    for (let i = 0; i < encoded.length; i++) {
        const value = BASE62_ALPHABET.indexOf(encoded[i]);
        if (value === -1) throw new Error(`Invalid Base62 character: ${encoded[i]}`);
        num = num * BASE62_LENGTH + BigInt(value);  // Convert value to BigInt
    }
    return num;
};