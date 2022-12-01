// import {Configuration, CreateImageRequestSizeEnum, OpenAIApi} from 'openai';

// import {OPENAI_API_KEY} from '@env';

// export const configuration = new Configuration({
//   apiKey: OPENAI_API_KEY,
// });

// export const openai = new OpenAIApi(configuration);

// export const createRequest = async (
//   model: string,
//   prompt: string,
//   temperature: number,
//   max_tokens: number,
// ) => {
//   openai.createCompletion({
//     model: model,
//     prompt: prompt,
//     temperature: temperature,
//     max_tokens: max_tokens,
//   });
// };

// export const generateImage = async (
//   prompt: string,
//   number: number,
//   size: CreateImageRequestSizeEnum,
// ) => {
//   return await openai.createImage({
//     prompt: prompt,
//     n: number,
//     size: size,
//   });
// };
