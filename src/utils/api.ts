import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getBookList = async()=>{
  try{
    const { data } = await axios.get(
      'https://raw.githubusercontent.com/vihaan-that/ThatTerm/refs/heads/main/bookshelf.md'
    );
    return data;
  } catch (error){
    return 'Could Not Fetch BookList';
  }
};

export const getReadme = async () => {
  try {
    const { data } = await axios.get(
      'https://raw.githubusercontent.com/vihaan-that/ThatTerm/main/README.md'
    );
    return data;
  } catch (error) {
    return 'An error occurred while fetching the README file.';
  }
};


export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};
