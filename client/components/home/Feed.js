import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d]`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayName: 'Ace',
        userName: '0xB75f4Ffb4ef3F560E11D191EE4D98b196e67A739',
        avatar:
            'https://yt3.ggpht.com/tyc/AKedOLRT9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
        text: 'Software is difficult',
        isProfileImageNft: false,
        timestamp: '2021-06-23T12:00:00.000Z', // this is how Sanity stores timestamp
    },
    {
        displayName: 'Morow',
        userName: '0xB75f4Ffb4ef3F560E11D191EE4D98b196e67A739',
        avatar:
            'https://yt3.ggpht.com/tyc/AKedOLRT9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
        text: 'Solidity is fun',
        isProfileImageNft: false,
        timestamp: '2020-06-23T12:00:00.000Z', // this is how Sanity stores timestamp
    },
    {
        displayName: 'Adil',
        userName: '0xB75f4Ffb4ef3F560E11D191EE4D98b196e67A739',
        avatar:
            'https://yt3.ggpht.com/tyc/AKedOLRT9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
        text: 'Go get a job',
        isProfileImageNft: false,
        timestamp: '2022-06-23T12:00:00.000Z', // this is how Sanity stores timestamp
    },
    {
        displayName: 'Nirmal',
        userName: '0xB75f4Ffb4ef3F560E11D191EE4D98b196e67A739',
        avatar:
            'https://yt3.ggpht.com/tyc/AKedOLRT9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
        text: 'Is it possible to finish this project until next money?',
        isProfileImageNft: false,
        timestamp: '2022-06-22T12:00:00.000Z', // this is how Sanity stores timestamp
    },
]

function Feed() {
    return(
      <div className={`${style.wrapper}`}>
        <div className={style.header}>
          <div className={style.headerTitle}>Home</div>
          <BsStars />
        </div>
        <TweetBox />
        {tweets.map((tweet, index) => (
            <Post 
                key={index}
                displayName={tweet.displayName}
                userName={`${tweet.userName.slice(0, 4,)}...${tweet.userName.slice(-4)}`}
                avater={tweet.userName}
                text={tweet.text}
                isProfileImageNft={tweet.isProfileImageNft}
                timestamp={tweet.timestamp}
            />
        ))}
      </div>
    )
}


export default Feed