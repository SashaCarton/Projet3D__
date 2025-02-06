import struct

def modify_ply(input_file, output_file):
    with open(input_file, 'rb') as file:
        # Lire le header
        header = b""
        while True:
            line = file.readline()
            header += line
            if line.strip() == b"end_header":
                break
        
        # Déterminer le début des données
        vertex_count = int([line for line in header.split(b'\n') if b"element vertex" in line][0].split()[-1])
        
        # Modifier les couleurs ou d'autres propriétés
        modified_data = bytearray()
        for _ in range(vertex_count):
            data = file.read(4 * 62)  # Lecture des propriétés (62 floats par vertex)
            properties = struct.unpack('<62f', data)
            
            # Supposons que f_dc_0, f_dc_1, f_dc_2 sont des couleurs
            modified_colors = tuple(min(1.0, max(0.0, c)) for c in properties[3:6])  # Clamp entre 0 et 1
            modified_properties = properties[:3] + modified_colors + properties[6:]
            
            modified_data += struct.pack('<62f', *modified_properties)
    
    # Écrire dans le fichier de sortie
    with open(output_file, 'wb') as file:
        file.write(header)
        file.write(modified_data)

# Utiliser la fonction
modify_ply("C:/Users/Sasha carton/Downloads/17 coin verdure.ply", "output_normalized.ply")

