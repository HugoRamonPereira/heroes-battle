import axios from 'axios';

const url = 'http://homologacao3.azapfy.com.br/api/ps/metahumans';

export async function getWarriors() {
  const response = await axios.get(url);

  return response.data;
}