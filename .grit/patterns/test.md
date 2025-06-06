
## Test Case: Empty Meta subclass

Classes that inherit from PermanentTrackedModel, and who have an subclass 'Meta'
should inherit from PermanentTrackedModel.Meta

```python
from abas.utils.models import PermanentTrackedModel, UniqueExcludeDeletedConstraint
class Stock(PermanentTrackedModel):
    warehouse = models.ForeignKey("warehouses.Warehouse", on_delete=models.PROTECT)
    submitted_by = models.ForeignKey('accounts.User', on_delete=models.PROTECT, related_name='+')
    approved_by = models.ForeignKey('accounts.User', on_delete=models.PROTECT, related_name='+', null=True)

    class Meta:
        ordering = ["-created"]
        default_permissions = ()
        permissions = (("approve_stockadjustment", "Can approve stock adjustments"),)
```

Even though the subclass is empty, it will change to inherit the right subclass

```python
class Stock(PermanentTrackedModel):
    warehouse = models.ForeignKey("warehouses.Warehouse", on_delete=models.PROTECT)
    submitted_by = models.ForeignKey('accounts.User', on_delete=models.PROTECT, related_name='+')
    approved_by = models.ForeignKey('accounts.User', on_delete=models.PROTECT, related_name='+', null=True)

    class Meta(PermanentTrackedModel.Meta):
        ordering = ["-created"]
        default_permissions = ()
        permissions = (("approve_stockadjustment", "Can approve stock adjustments"),)
```
