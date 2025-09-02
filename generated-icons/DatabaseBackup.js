import {tags} from 'ziko';
const {svg} = tags;
const DatabaseBackup = (props) => 
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
    tags.ellipse({"cx":"12","cy":"5","rx":"9","ry":"3"}),
	tags.path({"d":"M3 12a9 3 0 0 0 5 2.69"}),
	tags.path({"d":"M21 9.3V5"}),
	tags.path({"d":"M3 5v14a9 3 0 0 0 6.47 2.88"}),
	tags.path({"d":"M12 12v4h4"}),
	tags.path({"d":"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"})
    )
export default DatabaseBackup;
