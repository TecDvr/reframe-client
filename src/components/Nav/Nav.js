import React from 'react';
import { Route, Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    handleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    renderLogoutLink() {
        return (
          <div className='menuLink'>
            <Link 
              style={{ textDecoration: 'none' }} 
              to='/user'><p className='reframeLogo'>reframe</p>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              onClick={() => {
                window.localStorage.removeItem('zachs-token');
                window.localStorage.removeItem('userID');
              }}
              to='/'><p className='reframeLogo'>logout</p>
            </Link>
          </div>
        )
      }
    
      renderLoginLink() {
        return (
          <div className='menuLink'>
            <Link
                className='reframeLogo'
                style={{ textDecoration: 'none' }}
                to='/'><p>reframe</p></Link>
            <Route 
              path='/login'
              render={() => <Link
                style={{ textDecoration: 'none' }}
                to='/register'>
                <p className='reframeLogo'>register</p>
              </Link>}
            />
            <Route 
              path='/register'
              render={() => <Link
                style={{ textDecoration: 'none' }}
                to='/login'>
                <p className='reframeLogo'>login</p>
              </Link>}
            />     
          </div>
        )
      }
    
    //not on entire menu for onclick
    render() {
        return (
            <div className='navContainerMain'>
                {this.state.menuOpen === true ? 
                <div className='navContainer'>
                    <div className='menuOption' onClick={() => this.handleMenu()}>
                      <img className='menuLogo' src='https://lh3.googleusercontent.com/_92H6Ht6nXw7606vRAoHbsVl-Wigqm0f60kFkVlJXKN7zAMOvyjMeBgXVNu6kaxjfTLmwNJ8vc0xcEYcaQUSUSpwpbKDD24wNlFazUViQW37R9--znZJbMSR8--DAdIoAvu0a0MwpZhuwJ04CQkBYtDLJ5HMck1VgHu8wWgyvb5E55N5oaZkYHHf-O-zwP8gahQB-4O6ERSbvarkbw6GzrAYfE5M3gMn5EAgV4lOr3BYvnlMHeffFr4pnwg3ZQzTNSZTv-SyftahED0Qmj52CJ860PZP6qeI8dXPmpvyBZzlEK1HdketeGMHKe6OeDDTbLQPTv_6OJ3YT129cmXHAgjC4nF_dIG7NxW78XngBNCL9JNcSxpoEc3XCytGoEtr78z4CE0W-_-GZQ1MzYzh89-d0pxcrd0S6snZA4p4HH1IkSiXD7377X9elKvlcXpZP1WuXtnoyCXzGlxIrtFtZV8K6yHcEWmtksj0k5Ig-b4qm3-Ey14fgcdqQjAtLM37jJ2CmLWMfyxZAi4iiN-BQ9fX8GaxVpKuZTQaMJz9679dGKP_52gG2M2BQAVjdfYhk3QOBjICkCPxBewfj4qb3QGv9AIhyKpPJWBwSdj3ZwTLvTxL5beiUoW5xESxGY2kvKL119QvzYNBphK-TJ-kxXN44I9tIoFMv125W0uQHOBwzvugiQGFePoAaVQXNKGTytXc7UuPsxHz3ckuhIb_NTgheQdaUXuCCdl5E_WLw7aPaafs=s32-no' alt='menu logo'/>
                    </div>
                    <div className='menuOption popOut' onClick={() => this.handleMenu()}>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/user'><img className='menuLogo' src='https://lh3.googleusercontent.com/rGnul43CYcPALHGoOk7VJnle27uJw3pKJsSEgP8GkpMOhtW0VYLjrg5F1zYV399vOkGmuhysMtrsBmesX5f2BecZvAtxJuCmRJk4d7UgUAHzEmifW7SXVh2dg63csOU_aYHoeKY4E-oIHtroVzWrlgXsvFZywDfFJEz32LKkcde_yZrQlZB38zaSY9a6nA7jVX2Go98r_kd_8A4fwkCu4GV-3qn0U-KmKp2bOfY1wRAcBwxDGIfnyJAnLoLNR-QsiJuvHwHEq1VoTnj7y0bs-qsKVI7IJ4WaziO5cJc2BPS9v5znpIvKdY64WE3KUDXmrSIx31x5rqV95vM3NuqO1W_RF-YPp13SVMtramk7jUo8lCau97n-ZyWseRZ1SwhGW7jeh3Jxd7YgizD4d1VkFTM6cuP7UppsQr77-9Xj_1vmA7s3aGh_gNJn37OSTwWGnBH-_e6LUEKTm4SqkE-zqT6UoW6VuwHV_LcQ6SVzHBeWWvFDtUU_KGlHkgiZ03iQGcYKpIdEkf9fkv1XBuzQNFW4oyFZ8xDWrvZlRdNQt-7PZgick73R74f7yd2RGQWPl3lKjRytXKGl4LtlHXEmUdLIyMRiOGdUelBurPtl1oCnyrSLDpnYhVrl_GVU2JyQ6piivXrUFq8g_NfHIaXzXPoxq0b6UnVKpxuKVHMY0HmsyVGm1-aL0ja_tT-a-XT_BTAGjXVDzw7JWf4M227EzWbferWncylRiS6ibIA72hs0KaZL=s32-no' alt='menu logo'/></Link>
                    </div>
                    <div className='menuOption popOut' onClick={() => this.handleMenu()}>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/mistaketwo'><img className='menuLogo' src='https://lh3.googleusercontent.com/t_e3fO6f1loJyye3Z2Fbz-q3D9iuV6okq3ZbSXZCIkOl7nPYkFAnqQjZ5aRDDUucNcA_CNctbMACusec37gDEVjM7R_A2JMwKNobKUxOnOL-Pcn6C7GFqT8NkCkz-Q_mnVyNvZ9lenWqPOb3st01XQz-xudA2UqXLmzsi8_iFg_CmA1Ar8P0N01hRY8jGAqbmxWC5GRJE1Ux-bTbcIN0yy7C7CIqHLv5lEh5uVAljo4B5BiCH0RzqI-XTwYlVj4Xn6QeJDA4w0K7UzSngzar0NY7BcWlFlM4TXnV3gHvdHpl9QkeMfN4Epkt97j1EFclu6flgiJtU56GyPr0XtOG5JbyJOIigAu5mxCTCoLFxg8AchRP-PrPo9gZ_fMWbs6tEQBaRYG2SNXwa9VcQLkp3zU73YI44dI-kId6YgCS1lQIV30AIhCZPRQXq5LjCj-BEl-zjn9bvFiQCB7kb7OVzf7ruGqgxvaO9DrCx0o-VrLhFlScum2ds17AHRjeS1Ain7qAMeS9M0ocrI5Ex-1uQU8A3F7FjUh3iai-_TYiWh5kF9c7LjlEVu3u1DtnOXIqn08rBofk0PmsjagMaUzprFZZEkqZj5KzjmQ9ZB2Fgy_jAVjwzaW1Yak70bayy9_K46ksmVtIPsgdP40RqFgLuN42SqtwMyljwLF6a4aR-7cY3OVwS2NLb7AWnv0DZxhuIpr4PBvgSN_VasWSmUuUjZFMwREoPGwyXrbpX8vYnrJHV-r8=s32-no' alt='menu logo'/></Link>
                    </div>
                    <div className='menuOption popOut' onClick={() => this.handleMenu()}>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/feed'><img className='menuLogo' src='https://lh3.googleusercontent.com/Zpwo9y0svDKoeO8c5JDCAiZk93K3OH1NU4erIJAXYFxkv9fiwhysrs1Ix0yt7PZPHyHaJJEX-ozxbYFQA0m5XnBAJfqKPDMX5Di94h5euXla6MmufC-6PHfGAAqsJ_hAWQirvhg64C96Fm5Wlj9A4erJ-CL2d8pa9hs9E09ZL5jUGgshFte1l-j4LDFU1gUWG8ELOSStFKud25ACGhFUA_7LX_AFzNN5YIwK1Z2cG4nDHotDxVAQSdmWgp-TBEcXmGQQ_gNwoAVbHdkpuenlOelFhek_DBycDIoIPLFcjJ4ulcAFHxwX7TLMwE3lqSU3oVY6Jk_uTm1hCGR6AXq1U0yN6NNLwlTOFLuWzTl553AMWZFSxX_UDoVlgDTft2MHuCJNHiOKhSvaCc8HS54p4ozr2tFdu8qtrdAUfDt8x5u-TzBX_tRZPgbXu5rAI3mPdajbQz2Mbr0__ZxjJK8JXh6jMJxXq-mHNjHtQMPWGBUz_uMYEXwhdz43yccWaJPkDavqv0T6MHa8xs5KzIn7b2nXDXhcflo0ctheLSDprgqEMrkTM-2b7ysUnSDBpPT_9_6KGJfw2Tv_cmjOMysxX9jDsoMXTCiK1zW5SS0A0HFQN4mFT54EoEK7UhBmNZAx6mFU3j1YKo6k6abbSw6pvfo2cvcSgb9mlS4UnH8QzZWgrtu3YrWOilOZIHsuQhtiVVMU3NZSzp0iHAVGjvvdcfukU2x-WxhCtiFlwEQHAr4kbljZ=s32-no' alt='menu logo'/></Link>
                    </div>
                </div>
                : <div className='navContainer'><div className='menuOption main' onClick={() => this.handleMenu()}><img className='menuLogo' src='https://lh3.googleusercontent.com/HRoLfjMHphPGgeNSjqBGL1dpEvk-kuVNGp-l3lzYZ1HNmGU1KS6auh_uMv7m476N-2NpgE5SfAdg7m-EogftYrKsM9ameDdZkRtF9LrzG28bdwntim2jcc96X3qX5ZvzTZNleYGG0-ReGY3dOk-_KkNjA7SdKSnhZmnJ5kqU-I1uLCWSTD9c9OBWEjqurRUmU0Zr4qfwsFJMRnA176zOfTl1vMXzoTmkaT_VzmDeORmHIVl0BRy_k-pBz2zoQbEXYzf1a84yMA3RQubWDZOp6PwlvCUCNteQfgqfwK_XgECeSAUO8C90JMsVgrGg6ujAxAkOhzLxHJ_l68BN2Hcizhil9KH4P8hxgqDmk7sNWXt6IGbCw0opuiis8B2mMcf7tqqiwvOdsGbmakE0lzBeJuvbVaIdIktPJhoSbVZ9v5K8raF25i5515apduth1z3xff4_xi-7UQOA3PJBL2SVSLS2YHlqpPJo3X2ltKMBiJjZJp3KeClU6tMRx4VgLUqd5aLH9F8Uc7OdiBl5-QE6b94sxMVE6MbcHwG1kFr4KbJY3soiqigQ_KoXEdVcC7Wrfp031wVl8aCzTfr5NzgEC2C30-lXZ1XthbZd8lDc2Qo48BAQte54Gzm8ELpjgxHKu1siYO7Tr33lQd10-LNJQbVEspnvziBYKnpEPgT8DenhX9_2_ZZG1rYqZEqCaK7MPOpUFglmHBeAzfFHcBABCpCIURC3qGlwFeitcDpztj0idDmN=s32-no' alt='menu logo'/></div></div>}
                {!!window.localStorage.getItem('zachs-token')
                ? this.renderLogoutLink()
                : this.renderLoginLink()}
            </div>
        )
    }
}