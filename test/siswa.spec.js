// test/siswa.spec.js
import { test, expect } from '@playwright/test';

test.describe("CRUD Siswa", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/");
  });

  test("Menambahkan Siswa", async ({ page }) => {
    // Create
    await page.fill('input[placeholder="Nama Siswa"]', "Silmi");
    await page.fill('input[placeholder="Alamat Siswa"]', "Jakarta");
    await page.click('button[type="submit"]');

    // Cek ID siswa
    const siswaId = await page.getByTestId("siswa-id");
    await expect(siswaId).not.toBeEmpty();

    // Cek nama siswa
    const siswaName = await page.getByTestId("siswa-name");
    await expect(siswaName).toHaveText("Silmi");

    // Cek alamat siswa
    const siswaAlamat = await page.getByTestId("siswa-alamat");
    await expect(siswaAlamat).toHaveText("Jakarta");
  });

  test("Mengedit Siswa", async ({ page }) => {
    // Create siswa terlebih dahulu untuk diedit
    await page.fill('input[placeholder="Nama Siswa"]', "Silmi");
    await page.fill('input[placeholder="Alamat Siswa"]', "Jakarta");
    await page.click('button[type="submit"]');

    // Klik tombol edit
    await page.click('button:text("Edit")');

    // Edit nama siswa
    await page.fill('input[placeholder="Nama Siswa"]', "Silmi Edit");
    await page.click('button[type="submit"]');

    // Cek apakah nama telah diperbarui
    const siswaName = await page.getByTestId("siswa-name");
    await expect(siswaName).toHaveText("Silmi Edit");

    // Cek alamat tetap sama
    const siswaAlamat = await page.getByTestId("siswa-alamat");
    await expect(siswaAlamat).toHaveText("Jakarta");
  });

  test("Menghapus Siswa", async ({ page }) => {
    // Create siswa terlebih dahulu untuk dihapus
    await page.fill('input[placeholder="Nama Siswa"]', "Silmi");
    await page.fill('input[placeholder="Alamat Siswa"]', "Jakarta");
    await page.click('button[type="submit"]');

    // Klik tombol hapus
    await page.click('button:text("Delete")');

    // Pastikan siswa sudah tidak ada
    const siswaId = await page.getByTestId("siswa-id");
    await expect(siswaId).not.toBeVisible();
  });

});
