from PIL import Image

def remove_white_bg(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # If the pixel is very close to white, make it transparent
            if item[0] > 220 and item[1] > 220 and item[2] > 220:
                # To handle edges gracefully, we could calculate alpha based on how close to white
                # But simple transparency is usually okay if threshold is high.
                # Let's make anything above 230 transparent
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(output_path, "PNG")
        print("Success")
    except Exception as e:
        print("Error:", e)

remove_white_bg("logo.png", "logo_transparent.png")
