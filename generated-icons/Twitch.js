import {tags} from 'ziko';
const {svg} = tags;
const Twitch = (props) => 
    svg(
        {
        ...{
         "viewBox": "0 0 24 24",
         "fill": "none",
         "width": 24,
         "height": 24,
         "stroke": "green",
         "stroke-width": 2,
         "stroke-linecap": "round",
         "stroke-linejoin": "round"
        },
        ...props
        },
    tags.path({"d":"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"})
    )
export default Twitch;
