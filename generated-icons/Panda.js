import {tags} from 'ziko';
const {svg} = tags;
const Panda = (props) => 
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
    tags.path({"d":"M11.25 17.25h1.5L12 18z"}),
	tags.path({"d":"m15 12 2 2"}),
	tags.path({"d":"M18 6.5a.5.5 0 0 0-.5-.5"}),
	tags.path({"d":"M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83"}),
	tags.path({"d":"M6 6.5a.495.495 0 0 1 .5-.5"}),
	tags.path({"d":"m9 12-2 2"})
    )
export default Panda;
