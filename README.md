# Project V

## 1 Before You Begin

### 1.1 Installations

**Required**

- [Node.js](https://nodejs.org/en)
- [Git](https://git-scm.com/downloads)
- [Docker](https://docs.docker.com/get-docker/)

**Recommended**

- [GitHub Desktop](https://desktop.github.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

<br>

### 1.2 VS Code Extensions

If you are using VS Code as your IDE, here are the extensions needed to work on this project.

**Required**

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

**Recommended**

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
- [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces)
- [Highlight Bad Chars](https://marketplace.visualstudio.com/items?itemName=wengerk.highlight-bad-chars)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)

<br>

### 1.3 VS Code Recommended Settings

**Autosave**
Type `[CTRL + ,]` or go to _File -> Preferences -> Settings_ and type `auto save`. Select <u>one</u> of 3 options:

- **afterDelay**: Saves file after every second.
- **onFocusChange**: Saves file when the editor loses focus, like going to another file.
- **onWindowChange**: Saves file when the window loses focus, like going to another application outside VS Code.

<br>

**Format on Save**

> [!NOTE]
> This will only work if you have a formatter like Prettier installed.

Type `[CTRL + ,]` or go to _File -> Preferences -> Settings_ and type `format on save`. Check the checkbox for **Editor: Format On Save** option.

<br>

**Format on Paste**

> [!NOTE]
> This will only work if you have a formatter like Prettier installed.

Type `[CTRL + ,]` or go to _File -> Preferences -> Settings_ and type `format on paste`. Check the checkbox for **Editor: Format On Paste** option.

<br>

**Bracket Pair Colorization**
Type `[CTRL + ,]` , or go to _File -> Preferences -> Settings_ and type `bracket pair colorization`. Check the checkbox for **Editor › Bracket Pair Colorization: Enabled** option.

<br>

## 2 Setup

#### 2.1 Clone the project

On your command line interface, issue the command

```
git clone https://github.com/SnellJ2/vegas-finder.git
```

or use GitHub desktop to clone the project.

<br>

#### 2.2 Install the modules

Change directory to the `frontend` folder and issue the command

```
npm install
```

to install all the necessary node modules. This will create the `node_module` folder.

**TODO: Add backend tutorial**

<br>

#### 2.3 Setup Docker

> [!NOTE]
> Before continuing, make sure Docker is running in the background.

Change directory to the root folder, then issue the command

```
docker-compose build
```
