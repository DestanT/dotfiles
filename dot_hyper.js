'use strict';
// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.
module.exports = {
  config: {
    // choose either ⁠ 'stable' ⁠ for receiving highly polished,
    // or ⁠ 'canary' ⁠ for less polished but more frequent updates
    updateChannel: 'stable',
    // default font size in pixels for all tabs
    fontSize: 16,
    // font family with optional fallbacks
    fontFamily:
      '"FiraMono Nerd Font Mono", "Fira Mono for Powerline", "Symbols Nerd Font Mono", "DejaVu Sans Mono", "Lucida Console", monospace',
    // default font weight: 'normal' or 'bold'
    fontWeight: 'normal',
    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: 'bold',
    // line height as a relative unit
    lineHeight: 1,
    // letter spacing as a relative unit
    letterSpacing: 0,
    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(248,28,229,0.8)',
    // terminal text color under BLOCK cursor
    cursorAccentColor: 'blue',
    // ⁠ 'BEAM' ⁠ for |, ⁠ 'UNDERLINE' ⁠ for _, ⁠ 'BLOCK' ⁠ for █
    cursorShape: 'BLOCK',
    // set to ⁠ true ⁠ (without backticks and without quotes) for blinking cursor
    cursorBlink: false,
    // color of the text
    // foregroundColor: '#117313',
    foregroundColor: "#fff",
    // terminal background color
    // opacity is only supported on macOS
    backgroundColor: '#000',
    // terminal selection color
    selectionColor: 'rgba(149, 86, 205, 0.5)',
    // border color (window, tabs)
    borderColor: '#333',
    // custom CSS to embed in the main window
    css: `
      .tab_tab {
        background-color: #282c34 !important;
      }
      .tab_tab.tab_active {
        background-color: #1f2329 !important;
      }
    `,
    // custom CSS to embed in the terminal window
    termCSS: `
      .xterm-error {
        color: #ff0000 !important;
        font-weight: bold !important;
      }
    `,
    // set custom startup directory (must be an absolute path)
    workingDirectory: '',
    // if you're using a Linux setup which show native menus, set to false
    // default: ⁠ true ⁠ on Linux, ⁠ true ⁠ on Windows, ignored on macOS
    showHamburgerMenu: '',
    // set to ⁠ false ⁠ (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to ⁠ 'left' ⁠ if you want them on the left, like in Ubuntu
    // default: ⁠ true ⁠ (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: '',
    // custom padding (CSS format, i.e.: ⁠ top right bottom left ⁠)
    padding: '12px 14px',
    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: "#ff0000",
      // red: '#ba2b34',
      // green: "#33ff00",
      green: '#427d23',
      // yellow: "#ffff00",
      yellow: '#f4ee75',
      // blue: "#0099ff",
      blue: '#6e99d6',
      magenta: '#cc00ff',
      cyan: '#00ffff',
      // white: "#d0d0d0",
      white: '#f9f1f1',
      lightBlack: '#808080',
      lightRed: '#ff3333',
      // lightRed: '#ff0000',
      lightGreen: '#33ff00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#00ffff',
      lightWhite: '#ffffff',
    },
    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove ⁠ --login ⁠ in shellArgs
    //
    // Windows Subsystem for Linux (WSL) - previously Bash on Windows
    // - Example: ⁠ C:\\Windows\\System32\\wsl.exe ⁠
    //
    // Git-bash on Windows
    // - Example: ⁠ C:\\Program Files\\Git\\bin\\bash.exe ⁠
    //
    // PowerShell on Windows
    // - Example: ⁠ C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe ⁠
    //
    // Cygwin
    // - Example: ⁠ C:\\cygwin64\\bin\\bash.exe ⁠
    shell: '/bin/zsh',
    // for setting shell arguments (i.e. for using interactive shellArgs: ⁠ ['-i'] ⁠)
    // by default ⁠ ['--login'] ⁠ will be used
    shellArgs: ['--login'],
    // for environment variables
    env: {},
    // Supported Options:
    //  1. 'SOUND' -> Enables the bell as a sound
    //  2. false: turns off the bell
    bell: 'SOUND',
    // An absolute file path to a sound file on the machine.
    // bellSoundURL: '/path/to/sound/file',
    // if ⁠ true ⁠ (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: true,
    // if ⁠ true ⁠ (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,
    // if ⁠ true ⁠ (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (⁠ true ⁠ by default on Windows and disables the context menu feature)
    quickEdit: false,
    // choose either ⁠ 'vertical' ⁠, if you want the column mode when Option key is hold during selection (Default)
    // or ⁠ 'force' ⁠, if you want to force selection regardless of whether the terminal is in mouse events mode
    // (inside tmux or vim with mouse mode enabled for example).
    macOptionSelectionMode: 'vertical',
    // Whether to use the WebGL renderer. Set it to false to use canvas-based
    // rendering (slower, but supports transparent backgrounds)
    webGLRenderer: true,
    // keypress required for weblink activation: [ctrl|alt|meta|shift]
    // todo: does not pick up config changes automatically, need to restart terminal :/
    webLinksActivationKey: '',
    // if ⁠ false ⁠ (without backticks and without quotes), Hyper will use ligatures provided by some fonts
    disableLigatures: true,
    // set to true to disable auto updates
    disableAutoUpdates: true,
    // set to true to enable screen reading apps (like NVDA) to read the contents of the terminal
    screenReaderMode: false,
    // set to true to preserve working directory when creating splits or tabs
    preserveCWD: true,
    // for advanced config flags please refer to https://hyper.is/#cfg
    hyperBorder: {
      borderColors: ['#7e61ab', '#4b3970'],
      borderWidth: '8px',
    },
    // hyperterm-summon config
    summon: {
      hideDock: false,
      hideOnBlur: false,
      hotkey: 'Cmd+`',
    },
    hypercwd: {
      initialWorkingDirectory: '~/code',
    },
    hyperStatusLine: {
      dirtyColor: 'salmon',
      aheadColor: 'ivory',
      footerTransparent: true,
    },
    hyperTabs: {
      trafficButtons: true,
      border: false,
      tabIconsColored: true,
      closeAlign: 'right',
    },
  },
  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   ⁠ hyperpower ⁠
  //   ⁠ @company/project ⁠
  //   ⁠ project#1.0.1 ⁠
  plugins: [
    'hyper-tabs-enhanced',
    'hyper-darkmatter',
    'hypercwd',
    'hyperterm-paste',
    'hyper-statusline',
    'hyperterm-summon',
    'hyperborder',
  ],
  // in development, you can create a directory under
  // ⁠ ~/.hyper_plugins/local/ ⁠ and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],
  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};
//# sourceMappingURL=config-default.js.map