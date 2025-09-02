import {tags} from 'ziko';
const {svg} = tags;
const EthernetPort = (props) => 
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
    tags.path({"d":"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"}),
	tags.path({"d":"M6 8v1"}),
	tags.path({"d":"M10 8v1"}),
	tags.path({"d":"M14 8v1"}),
	tags.path({"d":"M18 8v1"})
    )
export default EthernetPort;
