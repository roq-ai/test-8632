import * as yup from 'yup';

export const chatGptPromptValidationSchema = yup.object().shape({
  prompt_text: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
