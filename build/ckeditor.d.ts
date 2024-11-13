/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
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
    static builtinPlugins: (typeof Essentials | typeof SimpleUploadAdapter | typeof CKFinderUploadAdapter | typeof Autoformat | typeof Bold | typeof Italic | typeof BlockQuote | typeof CKBox | typeof CloudServices | typeof EasyImage | typeof Heading | typeof Image | typeof ImageCaption | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof ImageResize | typeof Indent | typeof Link | typeof List | typeof MediaEmbed | typeof Paragraph | typeof PasteFromOffice | typeof PictureEditing | typeof Table | typeof TableToolbar | typeof TextTransformation | typeof Alignment | typeof Underline | typeof Font | typeof Subscript | typeof Superscript | typeof CKFinder | typeof FontColor | typeof FontBackgroundColor)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        fontSize: {
            options: string[];
            supportAllValues: boolean;
        };
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
        ckfinder: {
            uploadUrl: string;
        };
        language: string;
    };
}
