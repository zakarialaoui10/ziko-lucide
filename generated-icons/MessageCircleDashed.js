import {tags} from 'ziko';
const {svg} = tags;
const MessageCircleDashed = (props) => 
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
    tags.path({"d":"M10.1 2.182a10 10 0 0 1 3.8 0"}),
	tags.path({"d":"M13.9 21.818a10 10 0 0 1-3.8 0"}),
	tags.path({"d":"M17.609 3.72a10 10 0 0 1 2.69 2.7"}),
	tags.path({"d":"M2.182 13.9a10 10 0 0 1 0-3.8"}),
	tags.path({"d":"M20.28 17.61a10 10 0 0 1-2.7 2.69"}),
	tags.path({"d":"M21.818 10.1a10 10 0 0 1 0 3.8"}),
	tags.path({"d":"M3.721 6.391a10 10 0 0 1 2.7-2.69"}),
	tags.path({"d":"m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98"})
    )
export default MessageCircleDashed;
