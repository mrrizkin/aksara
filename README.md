# Aksun
Sundanese script converter and translation [WIP]

Introduction
------------

Aksun or Aksara Sunda (or Sundanese script) is a program for converting Latin script to Sundanese script easily. Also useful for translating from or to Sundanese language with or without Sundanese script.

Usage
-----
```javascript
const { converter } = require("aksun");

let result = converter("Kumaha Damang");
console.log(result);
```
Output: ᮊᮥᮙᮠ ᮓᮙᮀ

### CLI
```sh
aksun [options] <input>
```

#### Example
```sh
aksun Sampurasun
```
Output: ᮞᮙ᮪ᮕᮥᮛᮞᮥᮔ᮪

```sh
aksun "Wilujeung Sumping"
```
Output: ᮝᮤᮜᮥᮏᮩᮀ ᮞᮥᮙ᮪ᮕᮤᮀ

<details>
  <summary>Copy output to clipboard</summary>
  
  Linux with xclip
  ```bash
  aksun "Nami abdi Rizki, anjeun tiasa nyauran kuring Iki" | xclip -selection c
  ```

  Mac with pbcopy
  ```zsh
  aksun "Aing maung" | pbcopy
  ```

  Windows with clip
  ```powershell
  aksun "Tong cicing na lawang panto, pamali" | clip
  ```
</details>
<details>
  <summary>Available Options</summary>
  
  ```sh
  -v, --version           print aksun version
  -h, --help              print help to console
  ```
</details>

TODO
----
* [X] CommandLine Interface (node.js)
* [ ] Shell script version (for easy integration with other scripts)
* [ ] C version (for multi-platform)

Troubleshoot
------------
If you see square instead of glyps, make sure you install [noto fonts](https://www.google.com/get/noto/), or download sundanese font from [Kairaga.com](https://www.kairaga.com/font-sunda/ "download sundanese font")

If you are in the terminal, make sure your terminal support rendering the fonts. I use [st](https://github.com/nugrhrizki/st "my patch of st") with [JetBrainsMono Nerd Font](https://www.nerdfonts.com/font-downloads) and that's works great (although not perfect)

---

Original code from [Kairaga.com](https://www.kairaga.com/ "kairaga.com portal manuscript Sunda")
by Dian Tresna Nugraha released under GPL license
