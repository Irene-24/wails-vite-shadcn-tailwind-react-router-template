# Wails Vite + Tailwind + shadcn/ui + React Router Template

A starter template for building **Wails v2** desktop apps using:

* **Vite v3**
* **React + TypeScript**
* **Tailwind CSS**
* **shadcn/ui** component system
* **React Router** for routing

This template helps you quickly scaffold modern, styled, multi-page desktop applications with Go on the backend and React on the frontend.

---

## Getting Started

### Generate a new project from this template


```bash
wails init -n myapp -t https://github.com/Irene-24/wails-vite-shadcn-tailwind-react-router-template
```


### Run in development

In one terminal:

```bash
wails dev
```

This will start both the Go backend and Vite frontend dev server. Open your app window and you’ll see your changes instantly thanks to HMR (hot module reload).

---

### Install frontend dependencies

Move into your new project folder and install the frontend dependencies:

```bash
cd myapp/frontend
npm install <package-name>
```

---

### Build for production

To generate a binary:

```bash
wails build
```

The compiled app will be located in:

```
./build/bin/
```


## Help & Documentation

* Wails docs: [https://wails.io/docs](https://wails.io/docs)
* Tailwind docs: [https://tailwindcss.com](https://tailwindcss.com)
* shadcn/ui docs: [https://ui.shadcn.com](https://ui.shadcn.com)
* React Router docs: [https://reactrouter.com/home](https://reactrouter.com/home)
* Template issues/help: [https://github.com/Irene-24/wails-shadcn-vite-reactrouter](https://github.com/Irene-24/wails-shadcn-vite-reactrouter)

---
