import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@          DONATE 
         @|  @@@@@@@@@@@@@@@@   @@           <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
         @|                      @@          <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

`;
  } else {
    return `
████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████     sumfetch: summary display
████████████████████████████████████████████████████████████████████     -----------
█████████████░    ▒█░                                  ▓████████████     ABOUT
████████████░   ▒█████░                                 ████████████    
████████████  ░████████▓                                ▓███████████    ►Class:      Advaitin Polymath
████████████ ░███████████░                              ▓███████████    ►Background: Humanborn
████████████ ████████████▓                              ▓███████████    
████████████ ▓███████████▒                              ▓███████████    ►Alignment:  Chaotic Good
████████████  ░▒▒▒▓█▓▒▒▒░                               ▓███████████    ►Skills:     Guitar Bard, Flute Sage, Beatboxing Skald, 
████████████     ▒███▒                                  ▓███████████                 Code Mage, Wordsmith Scribe, Digital Explorer,
████████████     ▒▒▒▒▒                                  ▓███████████                 Iron Guardian, Mind Seeker
████████████                  ██████████▒               ▓███████████    
████████████                      ███░                  ▓███████████    ►Bio:        A Non-Dualist Techo-mage bard, with an affinity for iron.
████████████                      ███░                  ▓███████████                 Guided by the compass of curiosity, I've been led down  
████████████                      ███░                  ▓███████████                 myriad paths, catalysing change in my spirit and flesh.   
████████████    ▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓   ▓███████████    -----------
████████████    ▐▓                                 ▐▓   ▓███████████     CONTACT
████████████    ▐▓        Jack of All Trades       ▐▓   ▓███████████     Email: <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
████████████    ▐▓                                 ▐▓   ▓███████████     GitHub: <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
████████████    ▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓   ▓███████████     LinkedIn: <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>           
████████████            █████▒    ███░                  ▓███████████  
████████████            ██░░░    ░███░                  ▓███████████    
████████████            ░█░      ▓██▓                   ▓███████████   
████████████              ▒█▓▒▒███▓░                    ▓███████████   
████████████                                  ▒▒▒▒▒     ▓███████████    
████████████                                  ▒███▓     ▓███████████  
████████████                                ▒▒▒▓██▒▒▒░  ▓███████████   
████████████                              ░███████████▓ ▓███████████             
████████████                              █████████████ ▓███████████                   
████████████                              ░███████████░ ▓███████████                 
████████████                                █████████░  ▓███████████                  
████████████░                                ░█████▒    ████████████                  
█████████████░                                 ░█▒     ▓████████████                  
████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████████████              
████████████████████████████████████████████████████████████████████            
████████████████████████████████████████████████████████████████████                      
                                        
`; 
  }
};

export default sumfetch;
