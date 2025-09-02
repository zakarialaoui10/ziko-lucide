import {tags} from 'ziko';
const {svg} = tags;
const HardDriveUpload = (props) => 
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
    tags.path({"d":"m16 6-4-4-4 4"}),
	tags.path({"d":"M12 2v8"}),
	tags.rect({"width":"20","height":"8","x":"2","y":"14","rx":"2"}),
	tags.path({"d":"M6 18h.01"}),
	tags.path({"d":"M10 18h.01"})
    )
export default HardDriveUpload;
