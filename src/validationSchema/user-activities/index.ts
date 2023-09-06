import * as yup from 'yup';

export const userActivityValidationSchema = yup.object().shape({
  activity_type: yup.string().required(),
  activity_result: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
