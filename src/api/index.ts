import axios from 'axios';

const url = process.env.NEXT_PUBLIC_BASE_URL || '';

export async function getWarriors() {
  const response = await axios.get(url);

  return response.data;
}