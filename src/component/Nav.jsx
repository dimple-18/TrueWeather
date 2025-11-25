
import '../css/Nav.css';

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="navlogo">
          <h2>Weather App</h2>
        </div>
        <div className="navmain">
          <ul className="navlist">
            <li className="navitem">
              <a href="https://github.com/dimple-18/TrueWeather/">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEnElEQVR4nO1aSYheRRBu17jvijGiuEtEQZDcFBURo+AOkog4alwxjhfXg8tJDEoygjcRDx486cGDGLwIxhDF5RgnKOLBJctsr+r1V+1kSurPHxz/efO/fj3vvX8k/wd9mZlXXV9XdXUt49wQQwwxxBCHKIjobMlkvZCMCcvnQrILjAkQQmcxJuxn3d+NSS7r7Bv3f4JO6+lgPAPCt8KiKQuEbzz7jSbLLVcw87lCsgUETiVaQJyEZDMzr3LLBap6FBijIGR1ES0gbof4mqquGChZTOMyMH5siugC4owfAFw6GLKMe5q0ah/SM2Dc1SpZIRkB4e+2yc5z8dnA4YlWyAYOjw+KaO+ySN6GG88Omuh8S4NxZyNkvfcXgzE9aJIFpDPM4PJayarq0RHReJOqniCZXAXCy8LyRw2EfgfhJcnkyo5slrcKSTO+t+exNsIgvFiqXCZX9BzSCns7Qdif5KqEV3vfXSPe55vnaiHLzKs6GU+JkjqlpxUeFuMOIRkH430heSBwuCbP8/NU9ThbeZ6fHzisEZIHwfigm2/fXiRLZ/SMfq5NRCuXTFhItsRYRVWPcQ3DDqivHiRvL70QoLjc2Ht/oWsYFjhLrgItqeDw7DfG3juf+ZtqZVekD/lbSvVg/3TyBqhQ4oHwimsYwvJ6hB47koQT0UoQ5qKjK8kG1zACh6ciCM9lWXZWZeGSy7oK1v2oEYZFepF8UqpTLvelCB6LJOut+HctwYIjCFLibZsrCxbrM8UQZrznWgYYH5bo9VlloULyc6SFb3Utw4qYEgvvShG6L4ZwLdlNgluXeN2eykJRdk+6EVFVj3AtoyzjAgGVhYIQYiysE3qyaxnmVSWEQ2WhYExGPUs9VVIbsAKkxKUnKwuVAxOBmCg96loGCC+UBK2fKgsVlq2RUXq7axGqepi1a0v02tpY4iEHrHx3I+yK9Mrk/gid3kgRvL4C4d0ALnHtlId/RXjd2srCmfmcisXDeJNTAcxgtZD8EkF2VvfqSWmbEHZUnQpY1VTn26yqRwYOT8Y2IkD4OnkzMEarEJ5v7cDhMetBpe5tJV6nHIywas/eI8mEdUpPBSFPIv1v9/ErYXmzM56ZweoSl33Y2r0W+ZO6nYy9qnqsa6KJFzisAeE2YdkZSX57vzmvTf7tb1IPt7s2LYnsvM5HUZt2pylp7dnSJj3JuE7qKS7Co4TktyRvMusu4Qr9ByA8vwiRjw/eNyO1mDIhD9e5SPjM35gYNzbUPeX/rsBN54Tk6o6i3l9gTYOD3tCZHZP8as31qvuBsK1irNimqofXRthgiUXn2Vl4su+4miEkD1Vw5d2N9cRBWNs7CLfKRFWPr3Mfq8AiLSs+89fXufcCCMmjvRkYCO+6GtEdxJWR3W95tWsDQvJIwWD8U5/5G2KicdQe/cl6MO51bcKTvzmmSZAqv8+d3RfycK0bBLz3F5UlC6myF5H3RRtDu9LkHoxnwZhqinCng0oyYsW/Wy7QGT3TCu/epytVXvf7P21IV1sG1QR0j57YjeRfdmrThCBmXtO16GD/1bAqLM+2HnLlD4cYYoghhjhE8Q81LzflmJyr0AAAAABJRU5ErkJggg==" />
              </a>
            </li>
            <li className="navitem">
              <a href="https://www.linkedin.com/in/dimple-kumari-pan/">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoElEQVR4nO2ZTUoDQRCFWxR3/oBuBRd6A++goEGXouDOpVdwIwEP4hncJY56EHeKJkSSVE2/yqZkjKswY08MOD2hHrxdTXd9vOnu+XHOZDL9SWAcg5CAQMKiVRrjHh7AaEwFISy3VTcvxW6WTiKCZjWQ0FEYhJBU3aiE3S4DMow+EcagzPrQOtgZCM9XIm+Syqn2dSOzDOUcjI/agXjy+7Fs124WEO3q6mS99nStdiDIeUTIDqc6gnSE5EIHupk5WyPC8l47EInIzkB4jhJxJa4J1YDwnJ1FaZpuqeqydnRlxKM9EK7B6EYPkh2cnvzBb3Prp64Ly33UIN77neDkzjlVXQLhKVqQaeS93wZhFD2Iqi6GasC4ixbEs78SltfvWpIXIbksHHMoZ1GCgHEyzfs3gN04QQiPBSBJXr0GHkarA2H0ckEYvVwQ1YUoQWYdVwyELZFc2a3FtkbEdi2x7TdfYueIs68o+t92c/Kjpx8Eyf6eVt2ohN0KJ8JoRJ8I4TAI8pNKs+pmpdg3pSAmvrK3Y1gzGPfQKp2EyWRyk/oCN0sMn5UT6s8AAAAASUVORK5CYII=" />
              </a>
            </li>
            <li className="navitem">
              <a href="https://github.com/dimple-18/">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGh0lEQVR4nO1aW48VRRA+QFAIAQH1RV/c1cUn8fpgwsVrvEUfVFAkUZYgKuIlYILok+AFY6LRPyCgTwKBRCUoXkAliogKmAALgi+i6K7usqd6umoglKk+NbN9Zs+ZmXN21l2MnczDma6prq+7bl11SqX/R77BPTxJntKZMqy1l4QmfAQNvoOAu9BgDxli/5F3OreWgBbKN6XhMLiHJ2OAS9HgnqTQeR80+CMaXDIkp8Yn+Fwy9Boa7PUEOoGAp+LfgO+FQTg9+h0G4QwCWufNn5JvvO+F16uyOYMPgHkEAS1Ag13ern5EAc1BwOdVwICAHoq+ieji30DzENAq7XMU0ANk6GMP0J8ENF/WGhwQPTyZgN73dvTLMAinyVwYhNch4EkEPI0GZ/nfJYG4dwHNdrSAJ+Vb5TEdAb+KNwhoU+HqhifwUgL6JVYBoHkxQObRZOiACvBC8ttaQPT9Sp07IDzi90DtCFhWMEcQsa0QEAR0lTvuCojvk55GDFUFOsjMZ+UFIrQE1OH4Bri0iidim6yl3/5BQFcO+CQiEGRoG3fy+IQwY6N5C/a2mhtRB4jjD3hHZBfCq+Tz7uTxCLg9AtO0q1abcOpEhvYz87gkjcQNFWRPPT5pQBwYg3tVjR7uJwPzuFhtgX7mbp7YjHeKDVsZdVhjF/vMEHCnc60mfKxZIKEJH1fn8U28/t98TmjCRZHqeTJsbMibye5Eho2Ay2Q3PG8Virt0rlNpkirXCBDu4gmRcaOsZWgzAqIn/GEs4zNxzAJqzx3sojghu+XeMY8StyoxQ4H0RWZAcHEA6C05GQv21tCE11hrW+X0IjrZZWttizgPC/YWp5ZAb5ChLbGXMn3Bkgx9Im5a1hYZRBsie8nlliViR3GCmUfWsZ12zwkU9qDBTsnBuJfP67cu80gvzqzKzp30CKNgV5OOeUSUFIYmvBYB7xS1QINvy06iwd0EdBQNdvsJozgPdaufosE1CLgcDd4ta0U0nGIDLs3RdCj1VEQX9TS+TQMsrlD19dfUnclhIx7db86NW3txGh0Cfq1gnq5PpFksGrwnddGAZquAHxQIZLOuPSvP2nKyqbuMgIaZx2Qs+ooKuKJAIC8q7ctpdC4IS2JaOb2WUr3gRoY+zFwUaIOjDei+woAENEfVdV0OnluUdkG/SbnZOZTGPpmD0TZHW7Y3FAXElu2NSvt5Fq3Yh6rXmv6TgN+pcNfnYPSTW7RMlxV2ImWaqsLty6K1ZXuzmsHOWsJ119W75KJAx4TWGHNBUUCEF1XU5VgWrXg2Bf1X1YSL3JWLzin/blBvICC5aM18dlFAJK3HigyUg3a0uyoDnq4K2pI+FB2l/62Hu3jCfxAIN6xaLjvNijcNqtYYNWBsWrWGibFf2ICxt9Y0dhlSAWzA/e5T9zu1MPcLdIUKtzeL1pbtTcnLmC/c2iEOiE64BgPi6v4LAi1URpszhQNa72gDun8QUpT1A0pREknj2JxJ48ohThovqkkkBWU9snvTmOm1N1+COXhp/O76Aga4VE9lV54UIY+HaQDI77rLrWl0YuAK5Km6RHJ99K6603NddYNwmlxXpaqCBt8VY3UnW7nW9iSuukcTV125Ht8l1+WcV92ZMV1WjUtK+6nFh14+XxyDKxQUHKWxUolvr9Va0OLDjjx25BcgKmVQYxcrk1FyiSJDn/k9EAUspZwtBPS660JJii0lH2tbqspB3TxR1CY04dVaDnqUgN7UGhkkeIZkaGuiHPSEzh/PXXGU/oTuUK8rSAAd9hZBLaIti4BU5TvNFOgqhUBJkZZr7cxl12qHRxDwWa9A92AuEF7JdFPV0QN1SAHOF9ormS5qFogrjSZLpt08UUupBxMyZMaY/mB6eJLshtfDGKwi9p6MIvZ+nT8kWXrDQNwiiG2uP1HZse1pbQUEvL3QtkKXqwl/EdlFVr0rc0iTJQZj8AdEnFJ4o8fgkiqeiFOi4CwgCOjyAYHwGLdFFXnnpYDm12m9rcgLxEtJ9idab/O91tuhAZ9EcjhXCrTR8147oqDpN0PFZWYBEVfuNUNnKo8ZXpxwht20TeT0Zu2Rqumzlco012tPW7+HkQSizc6+9nSZ5roWQh+/4w252AEBEo9maFWi4V/1hwHZ0ah67v1hYEPiDwNVfzggQy813F4rCpBccrwObDNpyW7hMSQAag3tRsm/IlZLW0Lu0zWE7pIgKjRCW/c+MRyH7PSw2e3SGTD+AXRuTBY8UvMRAAAAAElFTkSuQmCC" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
