import React from 'react'

type navigatorType = Navigator & {
    deviceMemory :(number | 'unknown'),
    hardwareConcurrency :(number | 'unknown')
    connection :{
        downlink :(number | 'unknown')
        effectiveType :string 
        rtt :(number | 'unknown')
    },
    maxTouchPoints :(number | 'unknown'),
    onLine :(boolean | 'unknown'),
    storage :(StorageManager | 'unknown'),
    userAgentData :{
        brands :{
            brand :string,
            version :string,
        }[]
        mobile :(boolean | 'unknown'),
        platform :string,
    },
}


function App() {
    const {
        deviceMemory = 'unknown',
        hardwareConcurrency = 'unknown',
        connection = {
            downlink: 'unknown', 
            effectiveType: 'unknown',
            rtt: 'unknown',
        },
        maxTouchPoints = 'unknown',
        onLine = 'unknown',
        storage = 'unknown',
        userAgentData = {
            brands :[{
                brand: 'unknown',
                version: 'unknown',
            }],
            mobile: 'unknown',
            platform: 'unknown',
        },
    } = window.navigator as navigatorType 


    const [g, s] = React.useState<[string, string]>(['unknown', 'unknown'])
    React.useEffect(() => {
        if(storage == 'unknown'){
            return
        }
        (
            async () => {
                const {
                    usage = 'unknown', 
                    quota = 'unknown',
                } = await storage.estimate()
                s(() => [usage.toString(), quota.toString()])
            }
        )()
    }, [])



    return (
        <dl>
            <dt>RAM (GB)</dt>
            <dd>{deviceMemory}</dd>

            <dt>CPU Threads (pieces)</dt>
            <dd>{hardwareConcurrency}</dd>

            <dt>ROM Usage/Quota (bytes)</dt>
            <dd>{`${g[0]}/${g[1]}`}</dd>

            <dt>OS</dt>
            <dd>{userAgentData.platform}</dd>

            <dt>Mobile</dt>
            <dd>{userAgentData.mobile == 'unknown' ? 'unknown' : userAgentData.mobile ? 'Yes' : 'No'}</dd>

            <dt>Browser</dt>
            <dd>{`${userAgentData.brands[0].brand} ${userAgentData.brands[0].version}`}</dd>

            


            <dt>Max Touch Points</dt>
            <dd>{maxTouchPoints}</dd>

            <dt>ONLINE</dt>
            <dd>{onLine == 'unknown' ? 'unknown' : onLine ? 'ONLINE' : 'OFFLINE'}</dd>

            <dt>Network (Mbps)</dt>
            <dd>{connection.downlink}</dd>

            <dt>Network Type</dt>
            <dd>{connection.effectiveType}</dd>

            <dt>Network RTT</dt>
            <dd>{connection.rtt}</dd>


             

        
        
        </dl>
    )
}

export default App

