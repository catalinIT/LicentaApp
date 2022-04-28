using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class UnitContentRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "LearningUnitId",
                table: "UnitContents",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "LearningUnitRef",
                table: "UnitContents",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_UnitContents_LearningUnitId",
                table: "UnitContents",
                column: "LearningUnitId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_UnitContents_LearningUnits_LearningUnitId",
                table: "UnitContents",
                column: "LearningUnitId",
                principalTable: "LearningUnits",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UnitContents_LearningUnits_LearningUnitId",
                table: "UnitContents");

            migrationBuilder.DropIndex(
                name: "IX_UnitContents_LearningUnitId",
                table: "UnitContents");

            migrationBuilder.DropColumn(
                name: "LearningUnitId",
                table: "UnitContents");

            migrationBuilder.DropColumn(
                name: "LearningUnitRef",
                table: "UnitContents");
        }
    }
}
