"use strict";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.38.0(0e330ae453813de4e6cf272460fb79c7117073d0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/define("vs/language/typescript/tsMode",["require","require"],e=>(()=>{let t,i,s,r,n;var a,o,l=Object.create,d=Object.defineProperty,u=Object.getOwnPropertyDescriptor,g=Object.getOwnPropertyNames,c=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,m=(e,t,i)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,h=(t=function(t){if(void 0!==e)return e.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')},void 0!==e?e:"undefined"!=typeof Proxy?new Proxy(t,{get:(t,i)=>(void 0!==e?e:t)[i]}):t),b=(e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of g(t))p.call(e,r)||r===i||d(e,r,{get:()=>t[r],enumerable:!(s=u(t,r))||s.enumerable});return e},f=(e,t,i)=>(i=null!=e?l(c(e)):{},b(!t&&e&&e.__esModule?i:d(i,"default",{value:e,enumerable:!0}),e)),_=(e,t,i)=>(m(e,"symbol"!=typeof t?t+"":t,i),i),y=(i=(e,t)=>{var i=f(h("vs/editor/editor.api"));t.exports=i},()=>(s||i((s={exports:{}}).exports,s),s.exports)),w={};((e,t)=>{for(var i in t)d(e,i,{get:t[i],enumerable:!0})})(w,{Adapter:()=>F,CodeActionAdaptor:()=>B,DefinitionAdapter:()=>M,DiagnosticsAdapter:()=>I,DocumentHighlightAdapter:()=>N,FormatAdapter:()=>j,FormatHelper:()=>V,FormatOnTypeAdapter:()=>W,InlayHintsAdapter:()=>$,Kind:()=>E,LibFiles:()=>A,OutlineAdapter:()=>R,QuickInfoAdapter:()=>O,ReferenceAdapter:()=>K,RenameAdapter:()=>U,SignatureHelpAdapter:()=>P,SuggestAdapter:()=>L,WorkerManager:()=>x,flattenDiagnosticMessageText:()=>C,getJavaScriptWorker:()=>G,getTypeScriptWorker:()=>J,setupJavaScript:()=>q,setupTypeScript:()=>z});var S={};b(S,r=f(y()),"default"),n&&b(n,r,"default");var x=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;let e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=S.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(S.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){let t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},v=h("./monaco.contribution"),k={};function C(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(let r of e.next)s+=C(r,t,i);return s}function D(e){return e?e.map(e=>e.text).join(""):""}k["lib.d.ts"]=!0,k["lib.decorators.d.ts"]=!0,k["lib.decorators.legacy.d.ts"]=!0,k["lib.dom.d.ts"]=!0,k["lib.dom.iterable.d.ts"]=!0,k["lib.es2015.collection.d.ts"]=!0,k["lib.es2015.core.d.ts"]=!0,k["lib.es2015.d.ts"]=!0,k["lib.es2015.generator.d.ts"]=!0,k["lib.es2015.iterable.d.ts"]=!0,k["lib.es2015.promise.d.ts"]=!0,k["lib.es2015.proxy.d.ts"]=!0,k["lib.es2015.reflect.d.ts"]=!0,k["lib.es2015.symbol.d.ts"]=!0,k["lib.es2015.symbol.wellknown.d.ts"]=!0,k["lib.es2016.array.include.d.ts"]=!0,k["lib.es2016.d.ts"]=!0,k["lib.es2016.full.d.ts"]=!0,k["lib.es2017.d.ts"]=!0,k["lib.es2017.full.d.ts"]=!0,k["lib.es2017.intl.d.ts"]=!0,k["lib.es2017.object.d.ts"]=!0,k["lib.es2017.sharedmemory.d.ts"]=!0,k["lib.es2017.string.d.ts"]=!0,k["lib.es2017.typedarrays.d.ts"]=!0,k["lib.es2018.asyncgenerator.d.ts"]=!0,k["lib.es2018.asynciterable.d.ts"]=!0,k["lib.es2018.d.ts"]=!0,k["lib.es2018.full.d.ts"]=!0,k["lib.es2018.intl.d.ts"]=!0,k["lib.es2018.promise.d.ts"]=!0,k["lib.es2018.regexp.d.ts"]=!0,k["lib.es2019.array.d.ts"]=!0,k["lib.es2019.d.ts"]=!0,k["lib.es2019.full.d.ts"]=!0,k["lib.es2019.intl.d.ts"]=!0,k["lib.es2019.object.d.ts"]=!0,k["lib.es2019.string.d.ts"]=!0,k["lib.es2019.symbol.d.ts"]=!0,k["lib.es2020.bigint.d.ts"]=!0,k["lib.es2020.d.ts"]=!0,k["lib.es2020.date.d.ts"]=!0,k["lib.es2020.full.d.ts"]=!0,k["lib.es2020.intl.d.ts"]=!0,k["lib.es2020.number.d.ts"]=!0,k["lib.es2020.promise.d.ts"]=!0,k["lib.es2020.sharedmemory.d.ts"]=!0,k["lib.es2020.string.d.ts"]=!0,k["lib.es2020.symbol.wellknown.d.ts"]=!0,k["lib.es2021.d.ts"]=!0,k["lib.es2021.full.d.ts"]=!0,k["lib.es2021.intl.d.ts"]=!0,k["lib.es2021.promise.d.ts"]=!0,k["lib.es2021.string.d.ts"]=!0,k["lib.es2021.weakref.d.ts"]=!0,k["lib.es2022.array.d.ts"]=!0,k["lib.es2022.d.ts"]=!0,k["lib.es2022.error.d.ts"]=!0,k["lib.es2022.full.d.ts"]=!0,k["lib.es2022.intl.d.ts"]=!0,k["lib.es2022.object.d.ts"]=!0,k["lib.es2022.regexp.d.ts"]=!0,k["lib.es2022.sharedmemory.d.ts"]=!0,k["lib.es2022.string.d.ts"]=!0,k["lib.es2023.array.d.ts"]=!0,k["lib.es2023.d.ts"]=!0,k["lib.es2023.full.d.ts"]=!0,k["lib.es5.d.ts"]=!0,k["lib.es6.d.ts"]=!0,k["lib.esnext.d.ts"]=!0,k["lib.esnext.full.d.ts"]=!0,k["lib.esnext.intl.d.ts"]=!0,k["lib.scripthost.d.ts"]=!0,k["lib.webworker.d.ts"]=!0,k["lib.webworker.importscripts.d.ts"]=!0,k["lib.webworker.iterable.d.ts"]=!0;var F=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:r,column:n}=i,{lineNumber:a,column:o}=s;return{startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:o}}},A=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(e){return!!e&&0===e.path.indexOf("/lib.")&&!!k[e.path.slice(1)]}getOrCreateModel(e){let t=S.Uri.parse(e),i=S.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return S.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);let s=v.typescriptDefaults.getExtraLibs()[e];return s?S.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},I=class extends F{constructor(e,t,i,s){super(s),this._libFiles=e,this._defaults=t,this._selector=i;let r=e=>{if(e.getLanguageId()!==i)return;let t=()=>{let{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)},s,r=e.onDidChangeContent(()=>{clearTimeout(s),s=window.setTimeout(t,500)}),n=e.onDidChangeAttached(()=>{let{onlyVisible:i}=this._defaults.getDiagnosticsOptions();i&&(e.isAttachedToEditor()?t():S.editor.setModelMarkers(e,this._selector,[]))});this._listener[e.uri.toString()]={dispose(){r.dispose(),n.dispose(),clearTimeout(s)}},t()},n=e=>{S.editor.setModelMarkers(e,this._selector,[]);let t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(S.editor.onDidCreateModel(e=>r(e))),this._disposables.push(S.editor.onWillDisposeModel(n)),this._disposables.push(S.editor.onDidChangeModelLanguage(e=>{n(e.model),r(e.model)})),this._disposables.push({dispose(){for(let e of S.editor.getModels())n(e)}});let a=()=>{for(let e of S.editor.getModels())n(e),r(e)};this._disposables.push(this._defaults.onDidChange(a)),this._disposables.push(this._defaults.onDidExtraLibsChange(a)),S.editor.getModels().forEach(e=>r(e))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables=[]}async _doValidate(e){let t=await this._worker(e.uri);if(e.isDisposed())return;let i=[],{noSyntaxValidation:s,noSemanticValidation:r,noSuggestionDiagnostics:n}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),r||i.push(t.getSemanticDiagnostics(e.uri.toString())),n||i.push(t.getSuggestionDiagnostics(e.uri.toString()));let a=await Promise.all(i);if(!a||e.isDisposed())return;let o=a.reduce((e,t)=>t.concat(e),[]).filter(e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)),l=o.map(e=>e.relatedInformation||[]).reduce((e,t)=>t.concat(e),[]).map(e=>e.file?S.Uri.parse(e.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(l),e.isDisposed()||S.editor.setModelMarkers(e,this._selector,o.map(t=>this._convertDiagnostics(e,t)))}_convertDiagnostics(e,t){let i=t.start||0,s=t.length||1,{lineNumber:r,column:n}=e.getPositionAt(i),{lineNumber:a,column:o}=e.getPositionAt(i+s),l=[];return t.reportsUnnecessary&&l.push(S.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(S.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:o,message:C(t.messageText,`
`),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];let i=[];return t.forEach(t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;let r=t.start||0,n=t.length||1,{lineNumber:a,column:o}=s.getPositionAt(r),{lineNumber:l,column:d}=s.getPositionAt(r+n);i.push({resource:s.uri,startLineNumber:a,startColumn:o,endLineNumber:l,endColumn:d,message:C(t.messageText,`
`)})}),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return S.MarkerSeverity.Error;case 3:break;case 0:return S.MarkerSeverity.Warning;case 2:return S.MarkerSeverity.Hint}return S.MarkerSeverity.Info}},L=class extends F{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,i,s){let r=e.getWordUntilPosition(t),n=new S.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),a=e.uri,o=e.getOffsetAt(t),l=await this._worker(a);if(e.isDisposed())return;let d=await l.getCompletionsAtPosition(a.toString(),o);return!d||e.isDisposed()?void 0:{suggestions:d.entries.map(i=>{let s=n;if(i.replacementSpan){let t=e.getPositionAt(i.replacementSpan.start),r=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);s=new S.Range(t.lineNumber,t.column,r.lineNumber,r.column)}let r=[];return void 0!==i.kindModifiers&&-1!==i.kindModifiers.indexOf("deprecated")&&r.push(S.languages.CompletionItemTag.Deprecated),{uri:a,position:t,offset:o,range:s,label:i.name,insertText:i.name,sortText:i.sortText,kind:L.convertKind(i.kind),tags:r}})}}async resolveCompletionItem(e,t){let i=e.uri,s=e.position,r=e.offset,n=await (await this._worker(i)).getCompletionEntryDetails(i.toString(),r,e.label);return n?{uri:i,position:s,label:n.name,kind:L.convertKind(n.kind),detail:D(n.displayParts),documentation:{value:L.createDocumentationString(n)}}:e}static convertKind(e){switch(e){case E.primitiveType:case E.keyword:return S.languages.CompletionItemKind.Keyword;case E.variable:case E.localVariable:return S.languages.CompletionItemKind.Variable;case E.memberVariable:case E.memberGetAccessor:case E.memberSetAccessor:return S.languages.CompletionItemKind.Field;case E.function:case E.memberFunction:case E.constructSignature:case E.callSignature:case E.indexSignature:return S.languages.CompletionItemKind.Function;case E.enum:return S.languages.CompletionItemKind.Enum;case E.module:return S.languages.CompletionItemKind.Module;case E.class:return S.languages.CompletionItemKind.Class;case E.interface:return S.languages.CompletionItemKind.Interface;case E.warning:return S.languages.CompletionItemKind.File}return S.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=D(e.documentation);if(e.tags)for(let i of e.tags)t+=`

${T(i)}`;return t}};function T(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){let[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` \u2014 ${s.map(e=>e.text).join(" ")}`)}else Array.isArray(e.text)?t+=` \u2014 ${e.text.map(e=>e.text).join(" ")}`:e.text&&(t+=` \u2014 ${e.text}`);return t}var P=class extends F{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case S.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case S.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case S.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,i,s){let r=e.uri,n=e.getOffsetAt(t),a=await this._worker(r);if(e.isDisposed())return;let o=await a.getSignatureHelpItems(r.toString(),n,{triggerReason:P._toSignatureHelpTriggerReason(s)});if(!o||e.isDisposed())return;let l={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]};return o.items.forEach(e=>{let t={label:"",parameters:[]};t.documentation={value:D(e.documentation)},t.label+=D(e.prefixDisplayParts),e.parameters.forEach((i,s,r)=>{let n=D(i.displayParts),a={label:n,documentation:{value:D(i.documentation)}};t.label+=n,t.parameters.push(a),s<r.length-1&&(t.label+=D(e.separatorDisplayParts))}),t.label+=D(e.suffixDisplayParts),l.signatures.push(t)}),{value:l,dispose(){}}}},O=class extends F{async provideHover(e,t,i){let s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;let a=await n.getQuickInfoAtPosition(s.toString(),r);if(!a||e.isDisposed())return;let o=D(a.documentation),l=a.tags?a.tags.map(e=>T(e)).join(`  

`):"",d=D(a.displayParts);return{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+d+"\n```\n"},{value:o+(l?`

`+l:"")}]}}},N=class extends F{async provideDocumentHighlights(e,t,i){let s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;let a=await n.getDocumentHighlights(s.toString(),r,[s.toString()]);if(!(!a||e.isDisposed()))return a.flatMap(t=>t.highlightSpans.map(t=>({range:this._textSpanToRange(e,t.textSpan),kind:"writtenReference"===t.kind?S.languages.DocumentHighlightKind.Write:S.languages.DocumentHighlightKind.Text})))}},M=class extends F{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){let s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;let a=await n.getDefinitionAtPosition(s.toString(),r);if(!a||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(a.map(e=>S.Uri.parse(e.fileName))),e.isDisposed()))return;let o=[];for(let e of a){let t=this._libFiles.getOrCreateModel(e.fileName);t&&o.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return o}},K=class extends F{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,s){let r=e.uri,n=e.getOffsetAt(t),a=await this._worker(r);if(e.isDisposed())return;let o=await a.getReferencesAtPosition(r.toString(),n);if(!o||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(o.map(e=>S.Uri.parse(e.fileName))),e.isDisposed()))return;let l=[];for(let e of o){let t=this._libFiles.getOrCreateModel(e.fileName);t&&l.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return l}},R=class extends F{async provideDocumentSymbols(e,t){let i=e.uri,s=await this._worker(i);if(e.isDisposed())return;let r=await s.getNavigationTree(i.toString());if(!r||e.isDisposed())return;let n=(t,i)=>({name:t.text,detail:"",kind:H[t.kind]||S.languages.SymbolKind.Variable,range:this._textSpanToRange(e,t.spans[0]),selectionRange:this._textSpanToRange(e,t.spans[0]),tags:[],children:t.childItems?.map(e=>n(e,t.text)),containerName:i});return r.childItems?r.childItems.map(e=>n(e)):[]}},E=class{};_(E,"unknown",""),_(E,"keyword","keyword"),_(E,"script","script"),_(E,"module","module"),_(E,"class","class"),_(E,"interface","interface"),_(E,"type","type"),_(E,"enum","enum"),_(E,"variable","var"),_(E,"localVariable","local var"),_(E,"function","function"),_(E,"localFunction","local function"),_(E,"memberFunction","method"),_(E,"memberGetAccessor","getter"),_(E,"memberSetAccessor","setter"),_(E,"memberVariable","property"),_(E,"constructorImplementation","constructor"),_(E,"callSignature","call"),_(E,"indexSignature","index"),_(E,"constructSignature","construct"),_(E,"parameter","parameter"),_(E,"typeParameter","type parameter"),_(E,"primitiveType","primitive type"),_(E,"label","label"),_(E,"alias","alias"),_(E,"const","const"),_(E,"let","let"),_(E,"warning","warning");var H=Object.create(null);H[E.module]=S.languages.SymbolKind.Module,H[E.class]=S.languages.SymbolKind.Class,H[E.enum]=S.languages.SymbolKind.Enum,H[E.interface]=S.languages.SymbolKind.Interface,H[E.memberFunction]=S.languages.SymbolKind.Method,H[E.memberVariable]=S.languages.SymbolKind.Property,H[E.memberGetAccessor]=S.languages.SymbolKind.Property,H[E.memberSetAccessor]=S.languages.SymbolKind.Property,H[E.variable]=S.languages.SymbolKind.Variable,H[E.const]=S.languages.SymbolKind.Variable,H[E.localVariable]=S.languages.SymbolKind.Variable,H[E.variable]=S.languages.SymbolKind.Variable,H[E.function]=S.languages.SymbolKind.Function,H[E.localFunction]=S.languages.SymbolKind.Function;var V=class extends F{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},j=class extends V{canFormatMultipleRanges=!1;async provideDocumentRangeFormattingEdits(e,t,i,s){let r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(r);if(e.isDisposed())return;let l=await o.getFormattingEditsForRange(r.toString(),n,a,V._convertOptions(i));if(!(!l||e.isDisposed()))return l.map(t=>this._convertTextChanges(e,t))}},W=class extends V{get autoFormatTriggerCharacters(){return[";","}",`
`]}async provideOnTypeFormattingEdits(e,t,i,s,r){let n=e.uri,a=e.getOffsetAt(t),o=await this._worker(n);if(e.isDisposed())return;let l=await o.getFormattingEditsAfterKeystroke(n.toString(),a,i,V._convertOptions(s));if(!(!l||e.isDisposed()))return l.map(t=>this._convertTextChanges(e,t))}},B=class extends V{async provideCodeActions(e,t,i,s){let r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=V._convertOptions(e.getOptions()),l=i.markers.filter(e=>e.code).map(e=>e.code).map(Number),d=await this._worker(r);if(e.isDisposed())return;let u=await d.getCodeFixesAtPosition(r.toString(),n,a,l,o);return!u||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:u.filter(e=>0===e.changes.filter(e=>e.isNewFile).length).map(t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t)),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){let s=[];for(let t of i.changes)for(let i of t.textChanges)s.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,i.span),text:i.newText}});return{title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},U=class extends F{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,s){let r=e.uri,n=r.toString(),a=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;let l=await o.getRenameInfo(n,a,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw Error("Renaming files is not supported.");let d=await o.findRenameLocations(n,a,!1,!1,!1);if(!d||e.isDisposed())return;let u=[];for(let e of d){let t=this._libFiles.getOrCreateModel(e.fileName);if(t)u.push({resource:t.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(t,e.textSpan),text:i}});else throw Error(`Unknown file ${e.fileName}.`)}return{edits:u}}},$=class extends F{async provideInlayHints(e,t,i){let s=e.uri,r=s.toString(),n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(s);return e.isDisposed()?null:{hints:(await o.provideInlayHints(r,n,a)).map(t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)})),dispose:()=>{}}}_convertHintKind(e){return"Parameter"===e?S.languages.InlayHintKind.Parameter:S.languages.InlayHintKind.Type}};function z(e){o=Q(e,"typescript")}function q(e){a=Q(e,"javascript")}function G(){return new Promise((e,t)=>{if(!a)return t("JavaScript not registered!");e(a)})}function J(){return new Promise((e,t)=>{if(!o)return t("TypeScript not registered!");e(o)})}function Q(e,t){let i=[],s=[],r=new x(t,e);i.push(r);let n=(...e)=>r.getLanguageServiceWorker(...e),a=new A(n);return function(){let{modeConfiguration:i}=e;X(s),i.completionItems&&s.push(S.languages.registerCompletionItemProvider(t,new L(n))),i.signatureHelp&&s.push(S.languages.registerSignatureHelpProvider(t,new P(n))),i.hovers&&s.push(S.languages.registerHoverProvider(t,new O(n))),i.documentHighlights&&s.push(S.languages.registerDocumentHighlightProvider(t,new N(n))),i.definitions&&s.push(S.languages.registerDefinitionProvider(t,new M(a,n))),i.references&&s.push(S.languages.registerReferenceProvider(t,new K(a,n))),i.documentSymbols&&s.push(S.languages.registerDocumentSymbolProvider(t,new R(n))),i.rename&&s.push(S.languages.registerRenameProvider(t,new U(a,n))),i.documentRangeFormattingEdits&&s.push(S.languages.registerDocumentRangeFormattingEditProvider(t,new j(n))),i.onTypeFormattingEdits&&s.push(S.languages.registerOnTypeFormattingEditProvider(t,new W(n))),i.codeActions&&s.push(S.languages.registerCodeActionProvider(t,new B(n))),i.inlayHints&&s.push(S.languages.registerInlayHintsProvider(t,new $(n))),i.diagnostics&&s.push(new I(a,e,t,n))}(),i.push({dispose:()=>X(s)}),n}function X(e){for(;e.length;)e.pop().dispose()}return b(d({},"__esModule",{value:!0}),w)})());