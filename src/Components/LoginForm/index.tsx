import * as MUI from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// Enable if copyright is needed

// function Copyright(props: any) {
//   return (
//     <MUI.Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <MUI.Link color="inherit" href="https://mui.com/">
//         Your Website
//       </MUI.Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </MUI.Typography>
//   );
// }

const theme = createTheme();

export default function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <MUI.Container component="main" maxWidth="xs">
        <MUI.CssBaseline />
        <MUI.Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <MUI.Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </MUI.Avatar>
          <MUI.Typography component="h1" variant="h5">
            Login to continue
          </MUI.Typography>
          <MUI.Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <MUI.TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <MUI.TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <MUI.FormControlLabel
              control={<MUI.Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <MUI.Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </MUI.Button>
            <MUI.Grid container>
              <MUI.Grid item xs>
                <MUI.Link href="#" variant="body2">
                  Forgot password?
                </MUI.Link>
              </MUI.Grid>
              <MUI.Grid item>
                <MUI.Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </MUI.Link>
              </MUI.Grid>
            </MUI.Grid>
          </MUI.Box>
        </MUI.Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </MUI.Container>
    </ThemeProvider>
  );
}