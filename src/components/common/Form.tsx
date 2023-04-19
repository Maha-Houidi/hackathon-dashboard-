import {
  Box,
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  Stack,
} from "@pankod/refine-mui";

import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({
  type,
  register,
  handleSubmit,
  formLoading,
  onFinishHandler,
}: FormProps) => {
  return (
      <Box>
          <Typography fontSize={25} fontWeight={700} color="#11142d">
              {type} a Team
          </Typography>

          <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
              <form
                  style={{
                      marginTop: "20px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                  }}
                  onSubmit={handleSubmit(onFinishHandler)}
              >
                  <Stack direction="row" gap={4}>
                      <FormControl>
                          <FormHelperText
                              sx={{
                                  fontWeight: 500,
                                  margin: "10px 0",
                                  fontSize: 16,
                                  color: "#11142d",
                              }}
                          >
                              Enter paid amount 
                          </FormHelperText>
                          <TextField
                              fullWidth
                              required
                              id="outlined-basic"
                              color="info"
                              type="number"
                              variant="outlined"
                              {...register("paidAmount", { required: true })}
                          />
                      </FormControl>
                  </Stack>
                  <CustomButton
                      type="submit"
                      title={formLoading ? "Submitting..." : "Submit"}
                      backgroundColor="#475be8"
                      color="#fcfcfc"
                  />
              </form>
          </Box>
      </Box>
  );
};

export default Form;