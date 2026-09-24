import os
from PIL import Image

def convert_images_to_webp(directory, max_width=800, quality=80):
    if not os.path.exists(directory):
        print("Directory does not exist.")
        return

    valid_extensions = (".jpg", ".jpeg", ".png", ".bmp", ".tiff", ".jfif")

    for filename in os.listdir(directory):
        if filename.lower().endswith(valid_extensions):
            img_path = os.path.join(directory, filename)
            base_name = os.path.splitext(filename)[0]
            output_path = os.path.join(directory, f"{base_name}.webp")

            try:
                with Image.open(img_path) as img:
                    if img.width > max_width:
                        ratio = max_width / float(img.width)
                        new_height = int(img.height * ratio)
                        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)

                    img.save(output_path, "WEBP", quality=quality)
                    print(f"Converted: {filename} -> {base_name}.webp")
                    
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")

target_directory = "public/"

convert_images_to_webp(target_directory, max_width=800, quality=80)
