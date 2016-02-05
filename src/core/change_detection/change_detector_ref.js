'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var constants_1 = require('./constants');
var di_1 = require('angular2/src/core/di');
var ChangeDetectorRef = (function () {
    function ChangeDetectorRef() {
    }
    ChangeDetectorRef = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ChangeDetectorRef);
    return ChangeDetectorRef;
})();
exports.ChangeDetectorRef = ChangeDetectorRef;
var ChangeDetectorRef_ = (function (_super) {
    __extends(ChangeDetectorRef_, _super);
    function ChangeDetectorRef_(_cd) {
        _super.call(this);
        this._cd = _cd;
    }
    ChangeDetectorRef_.prototype.markForCheck = function () { this._cd.markPathToRootAsCheckOnce(); };
    ChangeDetectorRef_.prototype.detach = function () { this._cd.mode = constants_1.ChangeDetectionStrategy.Detached; };
    ChangeDetectorRef_.prototype.detectChanges = function () { this._cd.detectChanges(); };
    ChangeDetectorRef_.prototype.checkNoChanges = function () { this._cd.checkNoChanges(); };
    ChangeDetectorRef_.prototype.reattach = function () {
        this._cd.mode = constants_1.ChangeDetectionStrategy.CheckAlways;
        this.markForCheck();
    };
    return ChangeDetectorRef_;
})(ChangeDetectorRef);
exports.ChangeDetectorRef_ = ChangeDetectorRef_;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdG9yX3JlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdG9yX3JlZi50cyJdLCJuYW1lcyI6WyJDaGFuZ2VEZXRlY3RvclJlZiIsIkNoYW5nZURldGVjdG9yUmVmLmNvbnN0cnVjdG9yIiwiQ2hhbmdlRGV0ZWN0b3JSZWZfIiwiQ2hhbmdlRGV0ZWN0b3JSZWZfLmNvbnN0cnVjdG9yIiwiQ2hhbmdlRGV0ZWN0b3JSZWZfLm1hcmtGb3JDaGVjayIsIkNoYW5nZURldGVjdG9yUmVmXy5kZXRhY2giLCJDaGFuZ2VEZXRlY3RvclJlZl8uZGV0ZWN0Q2hhbmdlcyIsIkNoYW5nZURldGVjdG9yUmVmXy5jaGVja05vQ2hhbmdlcyIsIkNoYW5nZURldGVjdG9yUmVmXy5yZWF0dGFjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwQkFBc0MsYUFBYSxDQUFDLENBQUE7QUFDcEQsbUJBQXlCLHNCQUFzQixDQUFDLENBQUE7QUFFaEQ7SUFBQUE7SUFnTUFDLENBQUNBO0lBaE1ERDtRQUFDQSxlQUFVQSxFQUFFQTs7MEJBZ01aQTtJQUFEQSx3QkFBQ0E7QUFBREEsQ0FBQ0EsQUFoTUQsSUFnTUM7QUEvTHFCLHlCQUFpQixvQkErTHRDLENBQUE7QUFFRDtJQUF3Q0Usc0NBQWlCQTtJQUN2REEsNEJBQW9CQSxHQUFtQkE7UUFBSUMsaUJBQU9BLENBQUNBO1FBQS9CQSxRQUFHQSxHQUFIQSxHQUFHQSxDQUFnQkE7SUFBYUEsQ0FBQ0E7SUFFckRELHlDQUFZQSxHQUFaQSxjQUF1QkUsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EseUJBQXlCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUM5REYsbUNBQU1BLEdBQU5BLGNBQWlCRyxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxHQUFHQSxtQ0FBdUJBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO0lBQ3BFSCwwQ0FBYUEsR0FBYkEsY0FBd0JJLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBQ25ESiwyQ0FBY0EsR0FBZEEsY0FBeUJLLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBQ3JETCxxQ0FBUUEsR0FBUkE7UUFDRU0sSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsR0FBR0EsbUNBQXVCQSxDQUFDQSxXQUFXQSxDQUFDQTtRQUNwREEsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsQ0FBQ0E7SUFDdEJBLENBQUNBO0lBQ0hOLHlCQUFDQTtBQUFEQSxDQUFDQSxBQVhELEVBQXdDLGlCQUFpQixFQVd4RDtBQVhZLDBCQUFrQixxQkFXOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3J9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENoYW5nZURldGVjdG9yUmVmIHtcbiAgLyoqXG4gICAqIE1hcmtzIGFsbCB7QGxpbmsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kjT25QdXNofSBhbmNlc3RvcnMgYXMgdG8gYmUgY2hlY2tlZC5cbiAgICpcbiAgICogPCEtLSBUT0RPOiBBZGQgYSBsaW5rIHRvIGEgY2hhcHRlciBvbiBPblB1c2ggY29tcG9uZW50cyAtLT5cbiAgICpcbiAgICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L0dDNTEyYj9wPXByZXZpZXcpKVxuICAgKlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIEBDb21wb25lbnQoe1xuICAgKiAgIHNlbGVjdG9yOiAnY21wJyxcbiAgICogICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICogICB0ZW1wbGF0ZTogYE51bWJlciBvZiB0aWNrczoge3tudW1iZXJPZlRpY2tzfX1gXG4gICAqIH0pXG4gICAqIGNsYXNzIENtcCB7XG4gICAqICAgbnVtYmVyT2ZUaWNrcyA9IDA7XG4gICAqXG4gICAqICAgY29uc3RydWN0b3IocmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgKiAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgKiAgICAgICB0aGlzLm51bWJlck9mVGlja3MgKytcbiAgICogICAgICAgLy8gdGhlIGZvbGxvd2luZyBpcyByZXF1aXJlZCwgb3RoZXJ3aXNlIHRoZSB2aWV3IHdpbGwgbm90IGJlIHVwZGF0ZWRcbiAgICogICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAqICAgICB9LCAxMDAwKTtcbiAgICogICB9XG4gICAqIH1cbiAgICpcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgKiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgKiAgIHRlbXBsYXRlOiBgXG4gICAqICAgICA8Y21wPjxjbXA+XG4gICAqICAgYCxcbiAgICogICBkaXJlY3RpdmVzOiBbQ21wXVxuICAgKiB9KVxuICAgKiBjbGFzcyBBcHAge1xuICAgKiB9XG4gICAqXG4gICAqIGJvb3RzdHJhcChBcHApO1xuICAgKiBgYGBcbiAgICovXG4gIGFic3RyYWN0IG1hcmtGb3JDaGVjaygpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyB0aGUgY2hhbmdlIGRldGVjdG9yIGZyb20gdGhlIGNoYW5nZSBkZXRlY3RvciB0cmVlLlxuICAgKlxuICAgKiBUaGUgZGV0YWNoZWQgY2hhbmdlIGRldGVjdG9yIHdpbGwgbm90IGJlIGNoZWNrZWQgdW50aWwgaXQgaXMgcmVhdHRhY2hlZC5cbiAgICpcbiAgICogVGhpcyBjYW4gYWxzbyBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGgge0BsaW5rIENoYW5nZURldGVjdG9yUmVmI2RldGVjdENoYW5nZXN9IHRvIGltcGxlbWVudFxuICAgKiBsb2NhbCBjaGFuZ2VcbiAgICogZGV0ZWN0aW9uIGNoZWNrcy5cbiAgICpcbiAgICogPCEtLSBUT0RPOiBBZGQgYSBsaW5rIHRvIGEgY2hhcHRlciBvbiBkZXRhY2gvcmVhdHRhY2gvbG9jYWwgZGlnZXN0IC0tPlxuICAgKiA8IS0tIFRPRE86IEFkZCBhIGxpdmUgZGVtbyBvbmNlIHJlZi5kZXRlY3RDaGFuZ2VzIGlzIG1lcmdlZCBpbnRvIG1hc3RlciAtLT5cbiAgICpcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGRlZmluZXMgYSBjb21wb25lbnQgd2l0aCBhIGxhcmdlIGxpc3Qgb2YgcmVhZG9ubHkgZGF0YS5cbiAgICogSW1hZ2luZSB0aGUgZGF0YSBjaGFuZ2VzIGNvbnN0YW50bHksIG1hbnkgdGltZXMgcGVyIHNlY29uZC4gRm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsXG4gICAqIHdlIHdhbnQgdG8gY2hlY2sgYW5kIHVwZGF0ZSB0aGUgbGlzdCBldmVyeSBmaXZlIHNlY29uZHMuIFdlIGNhbiBkbyB0aGF0IGJ5IGRldGFjaGluZ1xuICAgKiB0aGUgY29tcG9uZW50J3MgY2hhbmdlIGRldGVjdG9yIGFuZCBkb2luZyBhIGxvY2FsIGNoZWNrIGV2ZXJ5IGZpdmUgc2Vjb25kcy5cbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiBjbGFzcyBEYXRhUHJvdmlkZXIge1xuICAgKiAgIC8vIGluIGEgcmVhbCBhcHBsaWNhdGlvbiB0aGUgcmV0dXJuZWQgZGF0YSB3aWxsIGJlIGRpZmZlcmVudCBldmVyeSB0aW1lXG4gICAqICAgZ2V0IGRhdGEoKSB7XG4gICAqICAgICByZXR1cm4gWzEsMiwzLDQsNV07XG4gICAqICAgfVxuICAgKiB9XG4gICAqXG4gICAqIEBDb21wb25lbnQoe1xuICAgKiAgIHNlbGVjdG9yOiAnZ2lhbnQtbGlzdCcsXG4gICAqICAgdGVtcGxhdGU6IGBcbiAgICogICAgIDxsaSAqbmdGb3I9XCIjZCBvZiBkYXRhUHJvdmlkZXIuZGF0YVwiPkRhdGEge3tkfX08L2xpZz5cbiAgICogICBgLFxuICAgKiAgIGRpcmVjdGl2ZXM6IFtOZ0Zvcl1cbiAgICogfSlcbiAgICogY2xhc3MgR2lhbnRMaXN0IHtcbiAgICogICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZGF0YVByb3ZpZGVyOkRhdGFQcm92aWRlcikge1xuICAgKiAgICAgcmVmLmRldGFjaCgpO1xuICAgKiAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgKiAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAqICAgICB9LCA1MDAwKTtcbiAgICogICB9XG4gICAqIH1cbiAgICpcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgKiAgIHByb3ZpZGVyczogW0RhdGFQcm92aWRlcl0sXG4gICAqICAgdGVtcGxhdGU6IGBcbiAgICogICAgIDxnaWFudC1saXN0PjxnaWFudC1saXN0PlxuICAgKiAgIGAsXG4gICAqICAgZGlyZWN0aXZlczogW0dpYW50TGlzdF1cbiAgICogfSlcbiAgICogY2xhc3MgQXBwIHtcbiAgICogfVxuICAgKlxuICAgKiBib290c3RyYXAoQXBwKTtcbiAgICogYGBgXG4gICAqL1xuICBhYnN0cmFjdCBkZXRhY2goKTogdm9pZDtcblxuICAvKipcbiAgICogQ2hlY2tzIHRoZSBjaGFuZ2UgZGV0ZWN0b3IgYW5kIGl0cyBjaGlsZHJlbi5cbiAgICpcbiAgICogVGhpcyBjYW4gYWxzbyBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGgge0BsaW5rIENoYW5nZURldGVjdG9yUmVmI2RldGFjaH0gdG8gaW1wbGVtZW50IGxvY2FsXG4gICAqIGNoYW5nZSBkZXRlY3Rpb25cbiAgICogY2hlY2tzLlxuICAgKlxuICAgKiA8IS0tIFRPRE86IEFkZCBhIGxpbmsgdG8gYSBjaGFwdGVyIG9uIGRldGFjaC9yZWF0dGFjaC9sb2NhbCBkaWdlc3QgLS0+XG4gICAqIDwhLS0gVE9ETzogQWRkIGEgbGl2ZSBkZW1vIG9uY2UgcmVmLmRldGVjdENoYW5nZXMgaXMgbWVyZ2VkIGludG8gbWFzdGVyIC0tPlxuICAgKlxuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgZGVmaW5lcyBhIGNvbXBvbmVudCB3aXRoIGEgbGFyZ2UgbGlzdCBvZiByZWFkb25seSBkYXRhLlxuICAgKiBJbWFnaW5lLCB0aGUgZGF0YSBjaGFuZ2VzIGNvbnN0YW50bHksIG1hbnkgdGltZXMgcGVyIHNlY29uZC4gRm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsXG4gICAqIHdlIHdhbnQgdG8gY2hlY2sgYW5kIHVwZGF0ZSB0aGUgbGlzdCBldmVyeSBmaXZlIHNlY29uZHMuXG4gICAqXG4gICAqIFdlIGNhbiBkbyB0aGF0IGJ5IGRldGFjaGluZyB0aGUgY29tcG9uZW50J3MgY2hhbmdlIGRldGVjdG9yIGFuZCBkb2luZyBhIGxvY2FsIGNoYW5nZSBkZXRlY3Rpb25cbiAgICogY2hlY2tcbiAgICogZXZlcnkgZml2ZSBzZWNvbmRzLlxuICAgKlxuICAgKiBTZWUge0BsaW5rIENoYW5nZURldGVjdG9yUmVmI2RldGFjaH0gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAqL1xuICBhYnN0cmFjdCBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0aGUgY2hhbmdlIGRldGVjdG9yIGFuZCBpdHMgY2hpbGRyZW4sIGFuZCB0aHJvd3MgaWYgYW55IGNoYW5nZXMgYXJlIGRldGVjdGVkLlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSB0byB2ZXJpZnkgdGhhdCBydW5uaW5nIGNoYW5nZSBkZXRlY3Rpb24gZG9lc24ndCBpbnRyb2R1Y2VcbiAgICogb3RoZXIgY2hhbmdlcy5cbiAgICovXG4gIGFic3RyYWN0IGNoZWNrTm9DaGFuZ2VzKCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJlYXR0YWNoIHRoZSBjaGFuZ2UgZGV0ZWN0b3IgdG8gdGhlIGNoYW5nZSBkZXRlY3RvciB0cmVlLlxuICAgKlxuICAgKiBUaGlzIGFsc28gbWFya3MgT25QdXNoIGFuY2VzdG9ycyBhcyB0byBiZSBjaGVja2VkLiBUaGlzIHJlYXR0YWNoZWQgY2hhbmdlIGRldGVjdG9yIHdpbGwgYmVcbiAgICogY2hlY2tlZCBkdXJpbmcgdGhlIG5leHQgY2hhbmdlIGRldGVjdGlvbiBydW4uXG4gICAqXG4gICAqIDwhLS0gVE9ETzogQWRkIGEgbGluayB0byBhIGNoYXB0ZXIgb24gZGV0YWNoL3JlYXR0YWNoL2xvY2FsIGRpZ2VzdCAtLT5cbiAgICpcbiAgICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L2FVaFpoYT9wPXByZXZpZXcpKVxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgY3JlYXRlcyBhIGNvbXBvbmVudCBkaXNwbGF5aW5nIGBsaXZlYCBkYXRhLiBUaGUgY29tcG9uZW50IHdpbGwgZGV0YWNoXG4gICAqIGl0cyBjaGFuZ2UgZGV0ZWN0b3IgZnJvbSB0aGUgbWFpbiBjaGFuZ2UgZGV0ZWN0b3IgdHJlZSB3aGVuIHRoZSBjb21wb25lbnQncyBsaXZlIHByb3BlcnR5XG4gICAqIGlzIHNldCB0byBmYWxzZS5cbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiBjbGFzcyBEYXRhUHJvdmlkZXIge1xuICAgKiAgIGRhdGEgPSAxO1xuICAgKlxuICAgKiAgIGNvbnN0cnVjdG9yKCkge1xuICAgKiAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgKiAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEgKiAyO1xuICAgKiAgICAgfSwgNTAwKTtcbiAgICogICB9XG4gICAqIH1cbiAgICpcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6ICdsaXZlLWRhdGEnLFxuICAgKiAgIGlucHV0czogWydsaXZlJ10sXG4gICAqICAgdGVtcGxhdGU6IGBEYXRhOiB7e2RhdGFQcm92aWRlci5kYXRhfX1gXG4gICAqIH0pXG4gICAqIGNsYXNzIExpdmVEYXRhIHtcbiAgICogICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZGF0YVByb3ZpZGVyOkRhdGFQcm92aWRlcikge31cbiAgICpcbiAgICogICBzZXQgbGl2ZSh2YWx1ZSkge1xuICAgKiAgICAgaWYgKHZhbHVlKVxuICAgKiAgICAgICB0aGlzLnJlZi5yZWF0dGFjaCgpO1xuICAgKiAgICAgZWxzZVxuICAgKiAgICAgICB0aGlzLnJlZi5kZXRhY2goKTtcbiAgICogICB9XG4gICAqIH1cbiAgICpcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgKiAgIHByb3ZpZGVyczogW0RhdGFQcm92aWRlcl0sXG4gICAqICAgdGVtcGxhdGU6IGBcbiAgICogICAgIExpdmUgVXBkYXRlOiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJsaXZlXCI+XG4gICAqICAgICA8bGl2ZS1kYXRhIFtsaXZlXT1cImxpdmVcIj48bGl2ZS1kYXRhPlxuICAgKiAgIGAsXG4gICAqICAgZGlyZWN0aXZlczogW0xpdmVEYXRhLCBGT1JNX0RJUkVDVElWRVNdXG4gICAqIH0pXG4gICAqIGNsYXNzIEFwcCB7XG4gICAqICAgbGl2ZSA9IHRydWU7XG4gICAqIH1cbiAgICpcbiAgICogYm9vdHN0cmFwKEFwcCk7XG4gICAqIGBgYFxuICAgKi9cbiAgYWJzdHJhY3QgcmVhdHRhY2goKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENoYW5nZURldGVjdG9yUmVmXyBleHRlbmRzIENoYW5nZURldGVjdG9yUmVmIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yKSB7IHN1cGVyKCk7IH1cblxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7IHRoaXMuX2NkLm1hcmtQYXRoVG9Sb290QXNDaGVja09uY2UoKTsgfVxuICBkZXRhY2goKTogdm9pZCB7IHRoaXMuX2NkLm1vZGUgPSBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZXRhY2hlZDsgfVxuICBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQgeyB0aGlzLl9jZC5kZXRlY3RDaGFuZ2VzKCk7IH1cbiAgY2hlY2tOb0NoYW5nZXMoKTogdm9pZCB7IHRoaXMuX2NkLmNoZWNrTm9DaGFuZ2VzKCk7IH1cbiAgcmVhdHRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2QubW9kZSA9IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkNoZWNrQWx3YXlzO1xuICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gIH1cbn0iXX0=