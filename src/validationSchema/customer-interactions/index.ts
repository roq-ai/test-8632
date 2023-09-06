import * as yup from 'yup';

export const customerInteractionValidationSchema = yup.object().shape({
  interaction_type: yup.string().required(),
  interaction_result: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
