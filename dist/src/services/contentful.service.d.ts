import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
export declare class ContentfulService {
    private _http;
    private static HOST;
    private _linksLevel;
    constructor(_http: Http);
    getContentTypes(): Observable<any>;
    getContentType(contentTypeId: String): Observable<Response>;
    getAssets(): Observable<Response>;
    getAsset(assetId: String): Observable<Response>;
    getEntriesByType(type: string): Observable<Response>;
    getEntry(entryId: string): Observable<Response>;
    getEntryBySlug(type: string, slug: string): Observable<Response>;
    withLinksLevel(level: number): ContentfulService;
    private request(path, queryParams?);
}
