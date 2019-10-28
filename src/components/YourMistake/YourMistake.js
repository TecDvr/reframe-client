import React from 'react';
import './YourMistake.css';
import { withRouter } from 'react-router-dom';
import ReframeContext from '../../context/reframe-context';
import config from '../../config';

class YourMistake extends React.Component {
    static contextType = ReframeContext;

    constructor(props) {
        super(props);
        this.state = {
            boxOpen: true,
            comment: '',
            plan_one_check: false,
            plan_two_check: false,
            plan_three_check: false,
            plan_four_check: false,
            plan_five_check: false
        }
    }

    componentDidMount() {
        Promise.all([
            fetch(`${config.API_ENDPOINT}/comment/${this.props.id}`, {
                method: 'GET',
            }),
            fetch(`${config.API_ENDPOINT}/checkbox/${this.props.id}`, {
                method: 'GET',
            }),
        ])
        .then(([comment, checkbox]) => {
            return Promise.all([comment.json(), checkbox.json()])
        })
        .then(([comments, checkboxs]) => {
            this.setState({
                comment: comments,
                plan_one_check: checkboxs[0].plan_one_check,
                plan_two_check: checkboxs[0].plan_two_check,
                plan_three_check: checkboxs[0].plan_three_check,
                plan_four_check: checkboxs[0].plan_four_check,
                plan_five_check: checkboxs[0].plan_five_check
            })
        })
    }

    handleClick() {
        this.setState({
            boxOpen: !this.state.boxOpen
        })
    }

    handleBoxCheck() {
        fetch(`${config.API_ENDPOINT}/plancheck/${this.props.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
            })
            .then(res => {
                console.log('works')
            })
    }

    handleDelete(e) {
        e.preventDefault();
        fetch(`${config.API_ENDPOINT}/delete/${this.props.id}`, {
            method: 'DELETE'
            })
            .then(res => {
                
            })
    }

    render() {
        return (
            <div className='yourMistakeContainer'>
                {this.state.boxOpen === false ?
                    <div>
                        <div className='boxTitle'>
                            <div className='buttonContainerMistake'>
                                <button className='openButton' onClick={() => this.handleClick()}><img className='openIcon' src='https://lh3.googleusercontent.com/nMhn3YIuNIXSetsYPlYLoVJJbr493Qn9805Lmn12xClccVHnPccqHzudl_gRqdVu65LCvMyR2J4DD71DKVb3kP9HEW1YOCzjSdTJX_gamGXp6XQD2Jf2mg4mmLzSk75HREnK7714AQhN8rm6rIMDMthiYS7JaJubD-VQFdPMC_jQOV8xBSLYJutJwYTZkiVQdIx-ttjWRwk9uxc4eHpF9xVXs4mYBuHYGIAAe-By_XSR5bZDzb8JmZPwPZUQkIeQgk7QwP32wohIjWEJxMShcCW281w0dYlcwaioW54TataBpM-iER81UrhmWOmLJJDTAEeCZnnJbortjYacqpsbcMBgBW7eaNZuzEZ1SuPxB-FK74GFBdNg2r83o7FTNC1Y4snO4hsesCgr3mSOBxzrZsV7J4oCIW-gnQqzrs3to30e4B1g5LqUOJYL-1oVR0gWDlib21WKE7ABLH1Q40ZT8Ev-1JokSA-TdhAL1XJYqyN2xppBQYvrIXnACIInl3_d8TmG66SRLApXHcir65_BZRXN2j_9Jc-QNkIgpbdPwmgrRbtpFUk69E2XIBnpTLbKPSkgdOiOa4BpfA5fs8vFygvAlEU6u2tJMhumuoy97QBfWlf54tO6jeXOzPlQEH3ngdQBIJd6Vkskm5zWdtN0HbVwyJyFRjEw0msYj36RDm8InCsM0ItBxd4=s32-no' alt='close icon'/></button>
                                <button 
                                className='openButton'
                                onClick={(e) => this.handleDelete(e)}
                                ><img src='https://lh3.googleusercontent.com/EDG043pkqWQRBmRkc3t-398NfKBd6BbLplMOWhlnWKFrjCl7CcNyiC9NEeE2YgRmKnXdB72DgRhmrHmlnEfoQu_kAZ33WmI4UAYfZ_mQ_Lu7ERr4epb0yaMASCmmfVrrrxfvC3U4HI3VqSygpV_f77UHSl31xg8eccNdc5EFrYHJ0aOxt9P_YBCKZpnKLABbIX1n50iIQYBR-OpOgiVrrrHlnZsa3EYkzQPI-rV4n-nJ_1vFyDIjjcqmmLVwQmmOt9rr9uAE_UFe6dVbgbg6Z5qcxV610T_bnm3TsdSqx4nl9bjLHU0KJCjWFLEOoGlmvBOC30lYgqrR3fXdywxyy_QzGEwlh9WJAC3vv6cfutLK8wtktBmRmUxm3fI4EiXHHwzpmpoJnMlZmpqTJ6WZse7hl8PxoAW-xzeZz58XMDyTwcCp7Nj_P8of4K1W9fiur7TaiRF6he0hOAZW45bRESqAFO3DEvHdUHJH7SQUqHDtFYP-gqh6enwdpaWVXNOVUYl9io2BePFhZ2dTyCjaINofPpk976vpnUYOujeX_KOYF7v3nngVUUW2qBY1B4qKCSkqrZw_HL30yGHUBhkuFDOJixUyyaU5Wr8clCf82_FB1zwlrHMAJt-cpMhgnJJfRcH04q0pwXTLke6KlBzem4JatIID6Myr7P9-c0r6fN_m3sxg36-egOImqfpTwiid4hf6d5-XQP4pAd_Qah1g9cNZtci94AjHpDAsZHo1nU3pMcjx=s16-no' alt='trash icon'/>   
                                </button> 
                            </div>
                            <h2 className='yourMistakeTitle'>{this.props.nickname}</h2>

                            <div className='detailContainer'>
                                <p>{this.props.date.slice(0, 10)}</p>
                                {this.props.shared === true ? <img className='shareIcon' src='https://lh3.googleusercontent.com/nl164IFF0MtTShlbRMZya2c2Bmadtxw0vdQBdLyMFu2DHEAdZw8_uv66ZZxD_tTJFY8wpSGuxcaRMX3LUJPUHRU-rXRuwmMgrlbuBw06SpRV1Y7IkiZPAWIgqXQaLQgaZgxynYpuj90wBTz7pNWQG0TNnhebaJOt-LKrUf_dQL_Wc7R3-hbPHapBHQLt0O_RDM2iCplIoY2J2gGBdjQ8vYu-3tGUl2eFmwbOvtFyh80nxRLbKmzltGCf6AVqwqmVl7zH2bmskSzgfFe6IqcxRdYhsXHfIPO1k0iBtUBwwCLIbo58VFWwau5At-qGY0P79wfot_GkqEWkiojki0Va-2-RNVtG3FdHOPvzJ2_ujy1NK6Y_dL_nKuG8M9DX7YX8Q1xJpNmiTfzgddaSJgeySpdd6HFhL41p3LB-JCEbqFDnUidSBq_UjuMUMNIc3QpIOgIB0bD0bZYag7MhcTZ00wNlWV2c9LQk_asd6ux-yNbkqyHNh1YcofSvjMIHZ4vqxL6CteNYthqZ2gxTxrL410ne2HmNHgR3P7wU_TA-gRumXMk9kTX-zmH579E6XcsWAyoPZf0ibQcp_n6vjQq1nTdPwsbI_hcJ2GJ0ZqxKZc6GJhoZamqYAxOYOqxEbpB8li8IwgCsCFdYkBgR9oJGs3NGCYb3Nik4zGhvLvl7OswPbllyr3KaOQY=s32-no' alt='shared icon'/> : null}
                                <div className='mistakeWasBad'>{this.props.bad === 1 ? <p className='mistakeWasBadInsert'>Not that bad</p> : this.props.bad === 2 ? <p className='mistakeWasBadInsert'>Kinda bad</p> : this.props.bad === 3 ? <p className='mistakeWasBadInsert'>Pretty bad</p> : <p className='mistakeWasBadInsert'>Really bad</p>}</div>
                            </div>
                        </div>
                        <div className='boxText'>
                            <p className='boxTextTitle'>my mistake:</p>
                            <p>{this.props.mistakemade}</p>
                        </div>
                        <div className='boxText'>
                            <p className='boxTextTitle'>my thoughts:</p>
                            <ul>
                                <li className='lineItem'>{this.props.thoughts.went_wrong}</li>
                                <li className='lineItem'>{this.props.thoughts.why_wrong}</li>
                                <li className='lineItem'>{this.props.thoughts.what_doing}</li>
                                <li className='lineItem'>{this.props.thoughts.what_learn}</li>
                            </ul>
                        </div>
                        <div className='boxText'>
                            <p className='boxTextTitle'>my plan:</p>
                            <ul>
                                <li className='lineItem' onClick={e=>this.setState({plan_one_check: !this.state.plan_one_check}, () => {this.handleBoxCheck()})}>
                                    <p className='plainText'>{this.props.planone}</p>
                                    {this.state.plan_one_check === null || this.state.plan_one_check === false ? <div className='box'></div> :<div className='boxChecked'></div>}
                                </li>
                                <li className='lineItem' onClick={e=>this.setState({plan_two_check: !this.state.plan_two_check}, () => {this.handleBoxCheck()})}>
                                    <p className='plainText'>{this.props.plantwo}</p>
                                    {this.state.plan_two_check === null || this.state.plan_two_check === false ? <div className='box'></div> :<div className='boxChecked'></div>}
                                </li>
                                <li className='lineItem' onClick={e=>this.setState({plan_three_check: !this.state.plan_three_check}, () => {this.handleBoxCheck()})}>
                                    <p className='plainText'>{this.props.planthree}</p>
                                    {this.state.plan_three_check === null || this.state.plan_three_check === false ? <div className='box'></div> :<div className='boxChecked'></div>}
                                </li>
                                <li className='lineItem' onClick={e=>this.setState({plan_four_check: !this.state.plan_four_check}, () => {this.handleBoxCheck()})}>
                                    <p className='plainText'>{this.props.planfour}</p>
                                    {this.state.plan_four_check === null || this.state.plan_four_check === false ? <div className='box'></div> :<div className='boxChecked'></div>}
                                </li>
                                <li 
                                    className='lineItem' 
                                    onClick={e=> this.setState({plan_five_check: !this.state.plan_five_check}, () => {this.handleBoxCheck()})}>
                                    <p className='plainText'>{this.props.planfive}</p>
                                    {this.state.plan_five_check === null || this.state.plan_five_check === false ? <div className='box'></div> :<div className='boxChecked'></div>} 
                                </li>
                            </ul>
                        </div>
                        <div className='boxText'>
                            <p className='boxTextTitle'>comments</p>
                            
                            {this.state.comment.length === 0 ? <p>no comments at this time</p> : this.state.comment.map((comments, index) => <p className='commentText' key={index}>{comments.comment}</p>)}
                        </div>   
                    </div> 
                    : 
                    <div>
                        <div className='boxTitle'>
                            <button className='openButton' onClick={() => this.handleClick()}><img className='openIcon' src='https://lh3.googleusercontent.com/tTNVzAEcTV4ey0li2zxKPD1MDn1mRLrfAXxzlEPSdUP3fQLtQYwGtwMlqT5qfqynHve93m3j-tc9Dw3TFYAYLnyQog1O6w6SmUadHgqg21B6MCwUjCIayjU8UCJOvmFg6jNdrLuW0kcHXPbul8xEwiRidCcK6nju_0PmGpqnWOEOAdH21uH-NFPplYkwN3U_wHCh8j6ylSz0hNA81ZHCJvwghp1b2F55tHq6Tbe1AvwRvjUmQRPRhn8vgdxt3qpsuhrndediPUFR0F2RDswOFruxKkuVYLnIHrcmO37_XVCgI9hGXpnN5Fem0fpbKEGlQErNSt-MvAVt333u7NvmI33NdJ-pXGLNgJn-scLue8qC9h1HG8ZqsxETFJKsm9Nf1yfKBk2tTefcMdxnDxnF1Aus4o-bhPcDwbU-UooyNsyKBdEL0B-jE9swyc6NOE8_t2XPEoA6yYQ9FYXunT_vsv3MeaxxXMJRpHxweqpeorsa0yBhvEnRNqsBU0QPZd6jPttDOBuGPDnXY0khCTapO6NPeZeR6fZg1BuIhOsqXyN3zg3BXoxVIQSbUiJPKNDxZjewtW50U3jpv0hJNOEdzMaevWBOkc3PsCQaOM2xSO_x5AUAJJa4uOLtvt-Fb5hnaq2W4ivektaraC0-wx-tVsyqwOXdIzIsXBIPADrFeB-2GXdJDN6pkM8VJBdxX4iflM809kIxbNtv3HUTs98j_SqcerAweatrMuUA6StG2P9Hn4mw=s32-no' alt='open icon'/> </button>
                            <h2 className='collapsedTitle'>{this.props.nickname}</h2>
                            <div className='dataContainerMistake'>
                                <p>{this.props.date.slice(0, 10)}</p>
                                {this.props.shared === true ? <img className='shareIcon' src='https://lh3.googleusercontent.com/nl164IFF0MtTShlbRMZya2c2Bmadtxw0vdQBdLyMFu2DHEAdZw8_uv66ZZxD_tTJFY8wpSGuxcaRMX3LUJPUHRU-rXRuwmMgrlbuBw06SpRV1Y7IkiZPAWIgqXQaLQgaZgxynYpuj90wBTz7pNWQG0TNnhebaJOt-LKrUf_dQL_Wc7R3-hbPHapBHQLt0O_RDM2iCplIoY2J2gGBdjQ8vYu-3tGUl2eFmwbOvtFyh80nxRLbKmzltGCf6AVqwqmVl7zH2bmskSzgfFe6IqcxRdYhsXHfIPO1k0iBtUBwwCLIbo58VFWwau5At-qGY0P79wfot_GkqEWkiojki0Va-2-RNVtG3FdHOPvzJ2_ujy1NK6Y_dL_nKuG8M9DX7YX8Q1xJpNmiTfzgddaSJgeySpdd6HFhL41p3LB-JCEbqFDnUidSBq_UjuMUMNIc3QpIOgIB0bD0bZYag7MhcTZ00wNlWV2c9LQk_asd6ux-yNbkqyHNh1YcofSvjMIHZ4vqxL6CteNYthqZ2gxTxrL410ne2HmNHgR3P7wU_TA-gRumXMk9kTX-zmH579E6XcsWAyoPZf0ibQcp_n6vjQq1nTdPwsbI_hcJ2GJ0ZqxKZc6GJhoZamqYAxOYOqxEbpB8li8IwgCsCFdYkBgR9oJGs3NGCYb3Nik4zGhvLvl7OswPbllyr3KaOQY=s32-no' alt='shared icon'/> : <p>private</p>}
                            </div>
                        </div>
                    </div> 
                }
            </div>
        )
    }
}

export default withRouter(YourMistake);