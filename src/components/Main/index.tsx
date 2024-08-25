import { Typography } from "antd"
import VideoPlayer from "../VideoPlayer";

export default function Main(){
    const { Title } = Typography;
    return <>
        <Title style={{color: "white"}}>Go Expert</Title>
        <VideoPlayer />
    </>
}