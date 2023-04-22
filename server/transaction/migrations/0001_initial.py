# Generated by Django 4.2 on 2023-04-21 17:15

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('is_budgeted', models.BooleanField()),
                ('budget_type', models.CharField(blank=True, max_length=100, null=True)),
                ('budget', models.DecimalField(decimal_places=2, max_digits=4)),
                ('created_on', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='CategoryGroup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('is_expense', models.BooleanField()),
                ('is_budgeted', models.BooleanField()),
                ('budget_type', models.CharField(blank=True, max_length=100, null=True)),
                ('budget', models.DecimalField(decimal_places=2, max_digits=4)),
                ('created_on', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Label',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.CharField(max_length=255)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=4)),
                ('txn_date_time', models.DateTimeField(default=django.utils.timezone.now)),
                ('notes', models.CharField(blank=True, max_length=255, null=True)),
                ('created_on', models.DateField(auto_now_add=True)),
                ('account', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='account.account')),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='transaction.category')),
                ('label', models.ManyToManyField(to='transaction.label')),
            ],
        ),
        migrations.AddField(
            model_name='category',
            name='group',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='transaction.categorygroup'),
        ),
    ]