// import MathPlugin from 'ckeditor5-math/src/math';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockQuotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import FontPlugin from '@ckeditor/ckeditor5-font/src/font';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import HorizontalLinePlugin from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImageResizePlugin from '@ckeditor/ckeditor5-image/src/imageresize';
import IndentPlugin from '@ckeditor/ckeditor5-indent/src/indent';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbedPlugin from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOfficePlugin from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormatPlugin from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SpecialCharacterEssentialPlugin from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import SpecialCharacterPlugin from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import StrikethroughPlugin from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import SubscriptPlugin from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import SuperscriptPlugin from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import TableCellPropertiesPlugin from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TablePlugin from '@ckeditor/ckeditor5-table/src/table';
import TablePropertiesPlugin from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbarPlugin from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import UnderlinePlugin from '@ckeditor/ckeditor5-basic-styles/src/underline';
import CodePlugin from '@ckeditor/ckeditor5-basic-styles/src/code';

import FileBrowserPlugin from './plugins/ckeditor5-filebrowser/src/filebrowser';


const ckeditorConfig = {
	language: 'de',
	plugins: [
		// MathPlugin,
		AutoformatPlugin,
		BlockQuotePlugin,
		BoldPlugin,
		CodePlugin,
		EssentialsPlugin,
		FileBrowserPlugin,
		FontPlugin,
		HeadingPlugin,
		HorizontalLinePlugin,
		ImagePlugin,
		ImageResizePlugin,
		IndentPlugin,
		ItalicPlugin,
		LinkPlugin,
		ListPlugin,
		MediaEmbedPlugin,
		ParagraphPlugin,
		PasteFromOfficePlugin,
		RemoveFormatPlugin,
		SpecialCharacterEssentialPlugin,
		SpecialCharacterPlugin,
		StrikethroughPlugin,
		SubscriptPlugin,
		SuperscriptPlugin,
		TableCellPropertiesPlugin,
		TablePlugin,
		TablePropertiesPlugin,
		TableToolbarPlugin,
		UnderlinePlugin,
	],
	toolbar: [
		'undo', 'redo', '|',
		'mediaEmbed', 'filebrowser', 'insertTable', 'horizontalLine', 'specialCharacters', 'link', '|',
		'heading', '|',
		'numberedList', 'bulletedList', '|',
		'blockQuote', 'fontColor', 'fontBackgroundColor',
		'bold', 'italic', 'underline', 'strikethrough', 'code', 'subscript', 'superscript', '|',
		'removeFormat', '|',
	],
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties'],
	},
	math: {
		engine: 'mathjax',
		outputType: 'script',
		forceOutputType: false,
		enablePreview: true,
	},
	filebrowser: {
		browseUrl: '/files/my?CKEditor=evaluation',
	},
};

export default ckeditorConfig;
