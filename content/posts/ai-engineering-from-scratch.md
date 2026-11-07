+++
title = 'Ai Engineering From Scratch'
date = '2026-10-25T17:44:13-04:00'
draft = true
description = ''
tags = ['course', 'learning']
+++

My notes on [aiengineeringfromscratch.com](aiengineeringfromscratch.com).  

* 00-setup-and-tooling/01-dev-environment  

```
curl -LsSf https://astral.sh/uv/install.sh | sh
uv python install 3.12

uv venv
source .venv/bin/activate  # or .venv\Scripts\activate on Windows

uv pip install numpy matplotlib jupyter
```

https://github.com/schniz/fnm