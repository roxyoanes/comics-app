export const comicApi = async () => {
  try{
    let nocors= `https://cors-anywhere.herokuapp.com/`
    const response = await fetch(
      `${nocors}https://xkcd.com/info.0.json`
    );
    const data = await response.json();
    return data;
  } catch(error){
    throw error;
  }
}

export const secondComicApi = async (number) => {
  try{
    let nocors= `https://cors-anywhere.herokuapp.com/`
    const response = await fetch(
      `${nocors}https://xkcd.com/${number}/info.0.json`
    );
    const data = await response.json();
    return data;
  } catch(error){
    throw error;
  }
}