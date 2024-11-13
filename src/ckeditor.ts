/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import { InlineEditor as InlineEditorBase } from '@ckeditor/ckeditor5-editor-inline';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic, Underline, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, PictureEditing, ImageResize } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Font, FontColor, FontBackgroundColor } from '@ckeditor/ckeditor5-font';

import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { CKFinderUploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';

export default class InlineEditor extends InlineEditorBase {
	public static override builtinPlugins = [
		Essentials,
		SimpleUploadAdapter,
		CKFinderUploadAdapter,
		Autoformat,
		Bold,
		Italic,
		BlockQuote,
		CKBox,
		CloudServices,
		EasyImage,
		Heading,
		Image,
		ImageCaption,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		ImageResize,
		Indent,
		Link,
		List,
		MediaEmbed,
		Paragraph,
		PasteFromOffice,
		PictureEditing,
		Table,
		TableToolbar,
		TextTransformation,
		Alignment,
		Underline,
		Font,
		Subscript,
		Superscript,
		CKFinder,
		FontColor,
    	FontBackgroundColor
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'undo', 'redo',
				'|', 'heading', 'Alignment',
				'|', 'bold', 'italic', 'Underline', 'fontSize', 'fontColor', 'fontBackgroundColor',  'Subscript', 'Superscript',
				'|', 'link', 'ckfinder', 'insertTable', 'blockQuote', 'mediaEmbed',
				'|', 'bulletedList', 'numberedList', 'outdent', 'indent'
			]
		},
		fontSize: {
			options: [
				'default', '10', '12', '14', '18', '20', '22', '24', '26', '28'  // Thêm các giá trị kích thước chữ
			],
			supportAllValues: false // Chỉ cho phép các giá trị trong danh sách options
		},
		image: {
			toolbar: [
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side',
				'|',
				'toggleImageCaption',
				'imageTextAlternative',
				'ImageResize',
				'PictureEditing'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		},

		ckfinder: {
			uploadUrl: '/ckfinder/connector?command=FileUpload&type=Files&currentFolder=/'
		},

		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en',
	};
}
