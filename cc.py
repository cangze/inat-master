import os

# 配置模块及其页面
menu_config = {
    'introduction': ['founder', 'intro', 'direction', 'projects', 'conditions'],
    'members': ['all', 'phd', 'master', 'alumni'],
    'results': ['papers', 'patents', 'software', 'honors'],
    'construction': ['news', 'academic', 'meetings', 'lab-apply'],
    'join': ['faculty', 'postgraduate', 'assistant']
}

# 设置基础目录（按你的项目结构改）
base_dir = os.path.join('src', 'assets', 'contents')

# 遍历并生成 HTML 文件
for module, pages in menu_config.items():
    module_dir = os.path.join(base_dir, module)
    os.makedirs(module_dir, exist_ok=True)

    for page in pages:
        file_path = os.path.join(module_dir, f'{page}.html')
        print(f'📄 Creating:{file_path}')
        content = f'<p>welcome, {module}/{page} works!</p>'

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f'✔ Created: {module}/{page}.html')

print('🎉 All HTML files generated successfully.')
