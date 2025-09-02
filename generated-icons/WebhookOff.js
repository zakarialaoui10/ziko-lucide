import {tags} from 'ziko';
const {svg} = tags;
const WebhookOff = (props) => 
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
    tags.path({"d":"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"}),
	tags.path({"d":"M9 3.4a4 4 0 0 1 6.52.66"}),
	tags.path({"d":"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"}),
	tags.path({"d":"M20.3 20.3a4 4 0 0 1-2.3.7"}),
	tags.path({"d":"M18.6 13a4 4 0 0 1 3.357 3.414"}),
	tags.path({"d":"m12 6 .6 1"}),
	tags.path({"d":"m2 2 20 20"})
    )
export default WebhookOff;
