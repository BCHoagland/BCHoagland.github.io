import os

# remove all existing links
with open('index.html', 'r') as f:
    lines = f.readlines()
start = lines.index('    <!-- ADD BELOW -->\n')
end = lines.index('    <!-- ADD ABOVE -->\n')
del lines[start + 1 : end]
end -= end - start - 1

# loop through files to link to
for filename in os.listdir('notes'):
    name = filename.replace('.html', '')

    # find file title
    with open(f'notes/{filename}', 'r') as f:
        text = f.read()
        i = text.index('<title>') + 7
        j = text.index('</title>')
        title = text[i : j]

    # insert new link
    lines.insert(end, '    </div>\n')
    lines.insert(end, f'        <a href="notes/{name}.html">{title}</a>\n')
    lines.insert(end, '    <div class="item">\n')

# update index.html file
text = ''.join(lines)
with open('index.html', 'w') as f:
    f.write(text)