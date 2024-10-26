// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  const numColumns = 4; // Adjust the number of columns as desired
  const columnWidth = Math.max(...commands.map(cmd => cmd.length)) + 4; // Width of each column for alignment
  let c = '';

  for (let i = 0; i < commands.length; i++) {
    c += commands[i].padEnd(columnWidth, ' '); // Add spaces to align columns
    if ((i + 1) % numColumns === 0) c += '\n'; // New line after reaching column count
  }

  return `Welcome! Here are all the available commands:\n\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};


// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};



// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};


export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  const newWindow = window.open('https://www.youtube.com/watch?v=h6fcK_fRYaI', '_blank'); 
  return `You are universe manifesting itself to uunderstand it's nature`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `Home
Documents
Downloads
HomeworkFolder ---- 50 GB
DRDO MISSILE LAUNCH KEYS(DO NOT OPEN)`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can refer me for a cool job.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};


export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? Haven't integrated it yet (╥﹏╥)\nI can however redirect you to my remote compiler project, the day I actually complete it`;
};


export const sudo = async (args?: string[]): Promise<string> => {
  const newWindow = window.open('https://drive.google.com/file/d/1pYbeSccmk6hX2O-G6OJuLlfeTxcsTZoL/view?usp=sharing', '_blank'); // Open in the same tab
  return `Permission Denied: enduku ivanni ippudu? `;
};

export const banner = (args?: string[]): string => {
  return `
 █████   █████ █████ █████   █████   █████████     █████████   ██████   █████ ███████████ █████   █████   █████████   ███████████
░░███   ░░███ ░░███ ░░███   ░░███   ███░░░░░███   ███░░░░░███ ░░██████ ░░███ ░█░░░███░░░█░░███   ░░███   ███░░░░░███ ░█░░░███░░░█
 ░███    ░███  ░███  ░███    ░███  ░███    ░███  ░███    ░███  ░███░███ ░███ ░   ░███  ░  ░███    ░███  ░███    ░███ ░   ░███  ░ 
 ░███    ░███  ░███  ░███████████  ░███████████  ░███████████  ░███░░███░███     ░███     ░███████████  ░███████████     ░███    
 ░░███   ███   ░███  ░███░░░░░███  ░███░░░░░███  ░███░░░░░███  ░███ ░░██████     ░███     ░███░░░░░███  ░███░░░░░███     ░███    
  ░░░█████░    ░███  ░███    ░███  ░███    ░███  ░███    ░███  ░███  ░░█████     ░███     ░███    ░███  ░███    ░███     ░███    
    ░░███      █████ █████   █████ █████   █████ █████   █████ █████  ░░█████    █████    █████   █████ █████   █████    █████   
     ░░░      ░░░░░ ░░░░░   ░░░░░ ░░░░░   ░░░░░ ░░░░░   ░░░░░ ░░░░░    ░░░░░    ░░░░░    ░░░░░   ░░░░░ ░░░░░   ░░░░░    ░░░░░    
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

