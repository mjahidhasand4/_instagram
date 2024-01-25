"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components";

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (index + 1) % 4;
      setIndex(nextIndex);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <main className="page auth">
      <div className="screenshots-container">
        {Array.from({ length: 4 }, (_, _index) => (
          <img
            key={_index}
            src={`/images/screenshot${_index + 1}.png`}
            alt={`screenshot${_index + 1}`}
            style={{ opacity: _index === index ? 1 : 0 }}
          />
        ))}
      </div>

      <div>
        {/* Reset Password */}

        {/* Log in and Sign Up*/}
        <div className="login-signup">
          <div>
            <i className="icon instagram" />

            <div>
              {/* Log in */}
              <div className="log-in">
                <form>
                  <Input
                    name="user"
                    placeholder="Phone number, username, or email"
                  />
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <button disabled className="button primary">
                    Log in
                  </button>
                </form>

                <div className="or">
                  <span>or</span>
                </div>

                <button>
                  <i className="icon fb" />
                  <span>Log in with Facebook</span>
                </button>

                <button className="text link">Forgot password?</button>
              </div>

              {/* Sign up */}
            </div>
          </div>

          <div>
            <p>
              Don't have an account? <button>Sign up</button>
            </p>
            {/* <p>
              Have an account? <button>Log in</button>
            </p> */}
          </div>

          <div>
            <span>Get the app.</span>

            <div>
              <a href="https://play.google.com/store/apps/details?id=com.instagram.android" target="_blank">
                <img
                  src="/images/google-play.png"
                  alt="Get it on Google Play"
                />
              </a>
              <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1020">
                <img src="/images/microsoft.png" alt="Get it from Microsoft" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
