import {tags} from 'ziko';
const {svg} = tags;
const CloudMoonRain = (props) => 
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
    tags.path({"d":"M11 20v2"}),
	tags.path({"d":"M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36"}),
	tags.path({"d":"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}),
	tags.path({"d":"M7 19v2"})
    )
export default CloudMoonRain;
