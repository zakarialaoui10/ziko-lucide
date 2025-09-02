import {tags} from 'ziko';
const {svg} = tags;
const Fingerprint = (props) => 
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
    tags.path({"d":"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}),
	tags.path({"d":"M14 13.12c0 2.38 0 6.38-1 8.88"}),
	tags.path({"d":"M17.29 21.02c.12-.6.43-2.3.5-3.02"}),
	tags.path({"d":"M2 12a10 10 0 0 1 18-6"}),
	tags.path({"d":"M2 16h.01"}),
	tags.path({"d":"M21.8 16c.2-2 .131-5.354 0-6"}),
	tags.path({"d":"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"}),
	tags.path({"d":"M8.65 22c.21-.66.45-1.32.57-2"}),
	tags.path({"d":"M9 6.8a6 6 0 0 1 9 5.2v2"})
    )
export default Fingerprint;
