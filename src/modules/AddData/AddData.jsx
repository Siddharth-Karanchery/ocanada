import * as React from "react";
import "./AddData.css";
import { Box, Typography, TextField, Button } from "@mui/material";
import { ThemeProvider, styled } from "@mui/material/styles";
import { appTheme } from "../../theme";
import axios from "axios";

export const AddData = () => {
  const [drawNum, setDrawNum] = React.useState("");
  const [date, setDate] = React.useState("");
  const [ita, setIta] = React.useState("");
  const [cutoff, setCutoff] = React.useState("");
  const [pool_601_1200, setPool_601_1200] = React.useState("");
  const [pool_501_600, setPool_501_600] = React.useState("");
  const [pool_451_500, setPool_451_500] = React.useState("");
  const [pool_491_500, setPool_491_500] = React.useState("");
  const [pool_481_490, setPool_481_490] = React.useState("");
  const [pool_471_480, setPool_471_480] = React.useState("");
  const [pool_461_470, setPool_461_470] = React.useState("");
  const [pool_451_460, setPool_451_460] = React.useState("");
  const [pool_401_450, setPool_401_450] = React.useState("");
  const [pool_441_450, setPool_441_450] = React.useState("");
  const [pool_431_440, setPool_431_440] = React.useState("");
  const [pool_421_430, setPool_421_430] = React.useState("");
  const [pool_411_420, setPool_411_420] = React.useState("");
  const [pool_401_410, setPool_401_410] = React.useState("");
  const [pool_351_400, setPool_351_400] = React.useState("");
  const [pool_301_350, setPool_301_350] = React.useState("");
  const [pool_0_300, setPool_0_300] = React.useState("");

  const onChangeHandler = (e, input) => {
    switch (input) {
      case "drawnum":
        setDrawNum(e.target.value);
        break;

      case "date":
        setDate(e.target.value);
        break;

      case "ita":
        setIta(e.target.value);
        break;

      case "cutoff":
        setCutoff(e.target.value);
        break;

      case "601-1200":
        setPool_601_1200(e.target.value);
        break;
      case "501-600":
        setPool_501_600(e.target.value);
        break;

      case "451-500":
        setPool_451_500(e.target.value);
        break;

      case "491-500":
        setPool_491_500(e.target.value);
        break;

      case "481-490":
        setPool_481_490(e.target.value);
        break;

      case "471-480":
        setPool_471_480(e.target.value);
        break;

      case "461-470":
        setPool_461_470(e.target.value);
        break;

      case "451-460":
        setPool_451_460(e.target.value);
        break;

      case "401-450":
        setPool_401_450(e.target.value);
        break;

      case "441-450":
        setPool_441_450(e.target.value);
        break;

      case "431-440":
        setPool_431_440(e.target.value);
        break;

      case "421-430":
        setPool_421_430(e.target.value);
        break;

      case "411-420":
        setPool_411_420(e.target.value);
        break;

      case "401-410":
        setPool_401_410(e.target.value);
        break;

      case "351-400":
        setPool_351_400(e.target.value);
        break;

      case "301-350":
        setPool_301_350(e.target.value);
        break;

      case "0-300":
        setPool_0_300(e.target.value);
        break;
      default:
        break;
    }
  };
  const onClearHandler = () => {};
  const onSubmitHandler = (e) => {
    const responseBody = {
      drawNum: drawNum,
      date: date,
      pool: {
        "601-1200": pool_601_1200,
        "501-600": pool_501_600,
        "451-500": {
          total: pool_451_500,
          breakdown: {
            "491-500": pool_491_500,
            "481-490": pool_481_490,
            "471-480": pool_471_480,
            "461-470": pool_461_470,
            "451-460": pool_451_460,
          },
        },
        "401-450": {
          total: pool_401_450,
          breakdown: {
            "441-450": pool_441_450,
            "431-440": pool_431_440,
            "421-430": pool_421_430,
            "411-420": pool_411_420,
            "401-410": pool_401_410,
          },
        },
        "351-400": pool_351_400,
        "301-350": pool_301_350,
        "0-300": pool_0_300,
      },
      cutoff: cutoff,
      ITA: ita,
    };

    axios
      .post(
        `https://ocanada-4d695-default-rtdb.asia-southeast1.firebasedatabase.app/data/.json?auth=${process.env.REACT_APP_DBSECRET}`,
        responseBody
      )
      .then(function (response) {
        alert("Data added successfully!");

        setDrawNum("");
        setDate("");
        setIta("");
        setCutoff("");
        setPool_601_1200("");
        setPool_501_600("");
        setPool_451_500("");
        setPool_491_500("");
        setPool_481_490("");
        setPool_471_480("");
        setPool_461_470("");
        setPool_451_460("");
        setPool_401_450("");
        setPool_441_450("");
        setPool_431_440("");
        setPool_421_430("");
        setPool_411_420("");
        setPool_401_410("");
        setPool_351_400("");
        setPool_301_350("");
        setPool_0_300("");
      })
      .catch(function (error) {
        alert("Something went wrong! Please try again.");
      });
  };
  return (
    <ThemeProvider theme={appTheme}>
      <Box className="AddData">
        <Typography
          variant="h4"
          sx={{
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Add Data
        </Typography>
        <Box component="form" className="AddData__content">
          <Box className="AddData__ele">
            <Typography className="AddData__ele__label">
              Draw Number:
            </Typography>
            <TextField
              className="AddData__ele__textfield"
              onChange={(e) => onChangeHandler(e, "drawnum")}
              name="drawnum"
              variant="outlined"
              sx={{ marginLeft: "0.5rem" }}
              value={drawNum}
            />
          </Box>
          <Box className="AddData__ele">
            <Typography className="AddData__ele__label">Date:</Typography>
            <TextField
              className="AddData__ele__textfield"
              onChange={(e) => onChangeHandler(e, "date")}
              name="date"
              variant="outlined"
              sx={{ marginLeft: "0.5rem", width: "14.2rem" }}
              type="date"
              value={date}
            />
          </Box>
          <Box className="AddData__ele">
            <Typography className="AddData__ele__label">ITA:</Typography>
            <TextField
              className="AddData__ele__textfield"
              onChange={(e) => onChangeHandler(e, "ita")}
              name="ita"
              variant="outlined"
              sx={{ marginLeft: "0.5rem" }}
              value={ita}
            />
          </Box>
          <Box className="AddData__ele">
            <Typography className="AddData__ele__label">Cutoff:</Typography>
            <TextField
              className="AddData__ele__textfield"
              onChange={(e) => onChangeHandler(e, "cutoff")}
              name="cutoff"
              variant="outlined"
              sx={{ marginLeft: "0.5rem" }}
              value={cutoff}
            />
          </Box>
          <Box className="AddData__ele top">
            <Typography className="AddData__ele__label">Pool:</Typography>
            <Box className="AddData__ele column">
              <Box className="AddData__ele shift">
                <Typography className="AddData__ele__label">
                  601-1200:
                </Typography>
                <TextField
                  className="AddData__ele__textfield"
                  onChange={(e) => onChangeHandler(e, "601-1200")}
                  name="601-1200"
                  variant="outlined"
                  sx={{ marginLeft: "0.5rem" }}
                  value={pool_601_1200}
                />
              </Box>
              <Box className="AddData__ele shift">
                <Typography className="AddData__ele__label">
                  501-600:
                </Typography>
                <TextField
                  className="AddData__ele__textfield"
                  onChange={(e) => onChangeHandler(e, "501-600")}
                  name="501-600"
                  variant="outlined"
                  sx={{ marginLeft: "0.5rem" }}
                  value={pool_501_600}
                />
              </Box>
              <Box className="AddData__ele top shift">
                <Typography
                  className="AddData__ele__label"
                  sx={{ marginLeft: "8rem" }}
                >
                  451-500:
                </Typography>
                <Box className="AddData__ele column">
                  <Box className="AddData__ele shift">
                    <Typography className="AddData__ele__label">
                      Total:
                    </Typography>
                    <TextField
                      className="AddData__ele__textfield"
                      onChange={(e) => onChangeHandler(e, "451-500")}
                      name="451-500"
                      variant="outlined"
                      sx={{ marginLeft: "0.5rem" }}
                      value={pool_451_500}
                    />
                  </Box>
                  <Box className="AddData__ele shift">
                    <Typography className="AddData__ele__label">
                      491-500:
                    </Typography>
                    <TextField
                      className="AddData__ele__textfield"
                      onChange={(e) => onChangeHandler(e, "491-500")}
                      name="491-500"
                      variant="outlined"
                      sx={{ marginLeft: "0.5rem" }}
                      value={pool_491_500}
                    />
                  </Box>
                  <Box className="AddData__ele shift">
                    <Typography className="AddData__ele__label">
                      481-490:
                    </Typography>
                    <TextField
                      className="AddData__ele__textfield"
                      onChange={(e) => onChangeHandler(e, "481-490")}
                      name="481-490"
                      variant="outlined"
                      sx={{ marginLeft: "0.5rem" }}
                      value={pool_481_490}
                    />
                  </Box>
                  <Box className="AddData__ele shift">
                    <Typography className="AddData__ele__label">
                      471-480:
                    </Typography>
                    <TextField
                      className="AddData__ele__textfield"
                      onChange={(e) => onChangeHandler(e, "471-480")}
                      name="471-480"
                      variant="outlined"
                      sx={{ marginLeft: "0.5rem" }}
                      value={pool_471_480}
                    />
                  </Box>
                  <Box className="AddData__ele shift">
                    <Typography className="AddData__ele__label">
                      461-470:
                    </Typography>
                    <TextField
                      className="AddData__ele__textfield"
                      onChange={(e) => onChangeHandler(e, "461-470")}
                      name="461-470"
                      variant="outlined"
                      sx={{ marginLeft: "0.5rem" }}
                      value={pool_461_470}
                    />
                  </Box>
                  <Box className="AddData__ele shift">
                    <Typography className="AddData__ele__label">
                      451-460:
                    </Typography>
                    <TextField
                      className="AddData__ele__textfield"
                      onChange={(e) => onChangeHandler(e, "451-460")}
                      name="451-460"
                      variant="outlined"
                      sx={{ marginLeft: "0.5rem" }}
                      value={pool_451_460}
                    />
                  </Box>
                </Box>
              </Box>
              <Box className="AddData__ele top shift">
                <Typography
                  className="AddData__ele__label"
                  sx={{ marginLeft: "8rem" }}
                >
                  401-450:
                </Typography>
                <Box className="AddData__ele column">
                  <Box className="AddData__ele shift">
                    <Typography className="AddData__ele__label">
                      Total:
                    </Typography>
                    <TextField
                      className="AddData__ele__textfield"
                      onChange={(e) => onChangeHandler(e, "401-450")}
                      name="401-450"
                      variant="outlined"
                      sx={{ marginLeft: "0.5rem" }}
                      value={pool_401_450}
                    />
                  </Box>
                  <Box className="AddData__ele shift">
                    <Typography className="AddData__ele__label">
                      441-450:
                    </Typography>
                    <TextField
                      className="AddData__ele__textfield"
                      onChange={(e) => onChangeHandler(e, "441-450")}
                      name="441-450"
                      variant="outlined"
                      sx={{ marginLeft: "0.5rem" }}
                      value={pool_441_450}
                    />
                  </Box>
                  <Box className="AddData__ele shift">
                    <Typography className="AddData__ele__label">
                      431-440:
                    </Typography>
                    <TextField
                      className="AddData__ele__textfield"
                      onChange={(e) => onChangeHandler(e, "431-440")}
                      name="431-440"
                      variant="outlined"
                      sx={{ marginLeft: "0.5rem" }}
                      value={pool_431_440}
                    />
                  </Box>
                  <Box className="AddData__ele shift">
                    <Typography className="AddData__ele__label">
                      421-430:
                    </Typography>
                    <TextField
                      className="AddData__ele__textfield"
                      onChange={(e) => onChangeHandler(e, "421-430")}
                      name="421-430"
                      variant="outlined"
                      sx={{ marginLeft: "0.5rem" }}
                      value={pool_421_430}
                    />
                  </Box>
                  <Box className="AddData__ele shift">
                    <Typography className="AddData__ele__label">
                      411-420:
                    </Typography>
                    <TextField
                      className="AddData__ele__textfield"
                      onChange={(e) => onChangeHandler(e, "411-420")}
                      name="411-420"
                      variant="outlined"
                      sx={{ marginLeft: "0.5rem" }}
                      value={pool_411_420}
                    />
                  </Box>
                  <Box className="AddData__ele shift">
                    <Typography className="AddData__ele__label">
                      401-410:
                    </Typography>
                    <TextField
                      className="AddData__ele__textfield"
                      onChange={(e) => onChangeHandler(e, "401-410")}
                      name="401-410"
                      variant="outlined"
                      sx={{ marginLeft: "0.5rem" }}
                      value={pool_401_410}
                    />
                  </Box>
                </Box>
              </Box>
              <Box className="AddData__ele shift">
                <Typography className="AddData__ele__label">
                  351-400:
                </Typography>
                <TextField
                  className="AddData__ele__textfield"
                  onChange={(e) => onChangeHandler(e, "351-400")}
                  name="351-400"
                  variant="outlined"
                  sx={{ marginLeft: "0.5rem" }}
                  value={pool_351_400}
                />
              </Box>
              <Box className="AddData__ele shift">
                <Typography className="AddData__ele__label">
                  301-350:
                </Typography>
                <TextField
                  className="AddData__ele__textfield"
                  onChange={(e) => onChangeHandler(e, "301-350")}
                  name="301-350"
                  variant="outlined"
                  sx={{ marginLeft: "0.5rem" }}
                  value={pool_301_350}
                />
              </Box>
              <Box className="AddData__ele shift">
                <Typography className="AddData__ele__label">0-300:</Typography>
                <TextField
                  className="AddData__ele__textfield"
                  onChange={(e) => onChangeHandler(e, "0-300")}
                  name="0-300"
                  variant="outlined"
                  sx={{ marginLeft: "0.5rem" }}
                  value={pool_0_300}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="AddData__buttonPanel">
          <Button variant="outlined" onClick={onClearHandler}>
            Clear
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={onSubmitHandler}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
