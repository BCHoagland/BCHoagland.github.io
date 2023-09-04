import os
import shutil

files_not_copied = []

folders = ['notes', 'projects']
for folder in folders:
    src = f'/Users/bradenhoagland/latex/{folder}'
    for name in os.listdir(src):
        try:
            # old_path = f'{src}/{name}'
            old_path = os.path.join(src, name)
            if os.path.isdir(old_path):
                old_path = f'{old_path}/{name}.pdf'
                new_path = f'/Users/bradenhoagland/git/bchoagland.github.io/latex/{folder}/{name}.pdf'
                os.makedirs(os.path.dirname(new_path), exist_ok=True)
                shutil.copyfile(old_path, new_path)
        except:
            files_not_copied.append(old_path)

print('Files not copied over:')
print('-' * 20)
for f in files_not_copied:
    print(f)
print()

# `public` folder has a different structure, and every PDF file in it is okay to copy over
src = '/Users/bradenhoagland/latex/public'
for filename in os.listdir(src):
    if filename.lower().endswith('.pdf'):
        old_path = os.path.join(src, filename)
        new_path = f'/Users/bradenhoagland/git/bchoagland.github.io/latex/public/{filename}'
        os.makedirs(os.path.dirname(new_path), exist_ok=True)
        shutil.copyfile(old_path, new_path)
