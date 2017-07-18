import fs from 'fs';

const defaultDatas = {
  data: "./public/data/products.json"
};

export default function Data() {
  return JSON.parse(fs.readFileSync(defaultDatas.data));
}
